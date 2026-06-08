# Vue Toggle Patterns — Project Rules

How to bind `<Switch>` (and similar toggle/checkbox components) correctly in this codebase. Read this before adding any new toggle.

> **TL;DR**
> 1. Use `v-model`, **never** `v-model:checked`, on `<Switch>` — the prop is `modelValue`, not `checked`.
> 2. Pick **Pattern A (form-based)** for settings/edit forms with a Save button. Pick **Pattern B (fire-and-forget)** for inline table-row toggles that should persist instantly.

---

## Rule 1 — The Switch component uses `v-model`, not `v-model:checked`

### What's wrong

```vue
<!-- ❌ broken — Switch stays unchecked even when bound value is true -->
<Switch v-model:checked="form.enabled" />
```

Many shadcn-vue / Radix tutorials online show `v-model:checked`. **Our local Switch wrapper does not support it.**

### What's right

```vue
<!-- ✅ correct -->
<Switch v-model="form.enabled" />
```

### Why

[resources/js/components/ui/switch/Switch.vue](../resources/js/components/ui/switch/Switch.vue) forwards `SwitchRootProps` from `reka-ui`:

```ts
import type { SwitchRootEmits, SwitchRootProps } from "reka-ui";
const props = defineProps<SwitchRootProps & { class?: HTMLAttributes["class"] }>();
```

`SwitchRootProps`' reactive prop is **`modelValue`** — there is no `checked` prop. Vue silently ignores unknown prop bindings, so `v-model:checked` looks like it does something but in fact passes nothing reactive to the component. The toggle then defaults to unchecked regardless of your data.

### How to diagnose

If your debug shows the source value is `true` but the toggle visually stays off, it's almost certainly this. Quick check:

```vue
<div>form.enabled = {{ form.enabled }} ({{ typeof form.enabled }})</div>
<Switch v-model="form.enabled" />
```

If the text shows `true (boolean)` but the Switch is off, the bind path is wrong (either prop name or you're binding to a non-reactive value).

### Same rule applies to

Any component that wraps a reka-ui Root which uses the default `modelValue` prop. In this repo that includes:
- `Switch`
- `Checkbox` (if/when added)
- `Toggle`, `ToggleGroup`
- `Select` (its trigger is single-value, also `v-model`)

When in doubt, open the component file under `resources/js/components/ui/<name>/` and read what `defineProps` accepts.

---

## Rule 2 — Two toggle patterns, pick by where the source-of-truth lives

### Pattern A — Form-based (settings pages, edit forms)

**When:** the toggle is one of several fields the user reviews together and saves with an explicit **Save** button.

```ts
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    enabled: props.data.enabled,
    on_success: props.data.on_success,
    on_failed: props.data.on_failed,
    // ...
});

const save = () => form.patch('/settings/login-alerts', { preserveScroll: true });
```

```vue
<Switch v-model="form.enabled" />
<Switch v-model="form.on_success" />
<Switch v-model="form.on_failed" />

<Button :disabled="form.processing" @click="save">
  {{ form.processing ? 'Saving…' : 'Save changes' }}
</Button>
```

Characteristics:
- Source of truth: the `useForm` object (local state until save).
- Persists: only on `Save`.
- Pre-fill: `useForm(props.data.*)` — works as long as the Switch reads from `form.*`.
- Bonus: `form.isDirty`, `form.processing`, `form.errors.*` come for free.
- Reference impl: [LoginAlertTelegram.vue](../resources/js/components/widgets/LoginAlertTelegram.vue).

### Pattern B — Fire-and-forget (table rows, inline toggles)

**When:** each toggle is independent of the others and should persist immediately on click — no Save button.

```ts
import { router } from '@inertiajs/vue3';

const handleStatusToggle = (employee: Employee, newStatus: boolean) => {
    router.put(`/dashboard/employees/${employee.uuid}/toggle-status`, {
        status: newStatus,
    }, {
        preserveState: true,
        preserveScroll: true,
    });
};
```

```vue
<Switch
    :model-value="employee.status"
    @update:model-value="(v) => handleStatusToggle(employee, v)"
/>
```

Characteristics:
- Source of truth: the row prop (`employee.status`) from server-rendered Inertia props.
- Persists: immediately on every toggle; Inertia re-renders the page with fresh server state.
- Pre-fill: free — you bind directly to the server-provided value.
- `preserveState: true` keeps other component state intact.
- `preserveScroll: true` keeps table scroll position; without it the page jumps to the top after every toggle.
- Reference impl: [Modules/Employee/.../Employee/Index.vue](../Modules/Employee/resources/js/pages/Dashboard/V1/Employee/Index.vue) `handleStatusToggle`.

### Why split into `:model-value` + `@update:model-value` in Pattern B?

`v-model` is sugar for `:model-value="X" @update:model-value="X = $event"`. Pattern B doesn't want to *write back* to a local ref — it wants to **fire a network call** with the new value. Splitting the sugar lets the handler receive `v` and post it without keeping a parallel local copy that could drift from the server.

If you used `v-model="employee.status"` you'd be mutating an Inertia-provided prop, which is forbidden and triggers a Vue warning.

---

## Picking between Pattern A and B

| Question | Answer → Pattern |
|---|---|
| Multiple fields, saved together with one button? | **A** (form) |
| One toggle per row, save instantly? | **B** (fire-and-forget) |
| Need optimistic UI / undo / unsaved-changes banner? | **A** (form holds local state) |
| Need server state to be the visible truth immediately? | **B** (let Inertia re-render) |
| User might toggle then refresh expecting it to stick? | **B** |
| User might toggle, change their mind, then cancel? | **A** |

### Don't mix

- **Don't** use `useForm` for a table-row toggle — the form state goes stale across Inertia re-renders, and you lose the simple "server is the truth" model.
- **Don't** use `router.put` per-keystroke inside a settings form — you'd spam the server and lose the Save UX (no `isDirty`, no batched validation errors).

---

## Common mistakes & quick fixes

| Symptom | Likely cause | Fix |
|---|---|---|
| Switch shows OFF even though data says true | Used `v-model:checked` instead of `v-model` | Replace with `v-model` |
| Table toggle "snaps back" after click | Server returns same prop; toggle UI didn't bind to the response | Use Pattern B (`:model-value` + handler), not local ref |
| Settings form "Save" does nothing on toggle changes | Toggle bound to `props.data.*` directly, not `form.*` | Bind to `form.*` |
| `form.isDirty` never becomes true | Same as above — toggle didn't mutate the form | Bind to `form.*` |
| Vue warning "Avoid mutating prop directly" | `v-model` on a prop in Pattern B | Use `:model-value` + `@update:model-value` |

---

## File map

```
resources/js/components/ui/switch/
├── Switch.vue                          ← wraps reka-ui SwitchRoot; uses modelValue
└── index.ts

resources/js/components/widgets/
└── LoginAlertTelegram.vue              ← Pattern A reference (useForm + Save)

Modules/Employee/resources/js/pages/Dashboard/V1/Employee/
└── Index.vue                           ← Pattern B reference (handleStatusToggle)
```
