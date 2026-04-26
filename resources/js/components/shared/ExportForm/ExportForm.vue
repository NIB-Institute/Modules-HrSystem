<script setup lang="ts">
import { computed, watch } from 'vue';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FileSpreadsheet, FileText } from 'lucide-vue-next';

export interface ExportColumn {
    key: string;
    label: string;
    default?: boolean;
}

export type ExportMode = 'export' | 'template';
export type ExportFormat = 'xlsx' | 'csv';

export interface ExportFormState {
    mode: ExportMode;
    format: ExportFormat;
    columns: string[];
}

const props = withDefaults(
    defineProps<{
        availableColumns: ExportColumn[];
        showTemplate?: boolean;
    }>(),
    {
        showTemplate: true,
    },
);

const state = defineModel<ExportFormState>('state', { required: true });

const initSelectionIfEmpty = () => {
    if (state.value.columns.length === 0) {
        state.value = {
            ...state.value,
            columns: props.availableColumns
                .filter((c) => c.default !== false)
                .map((c) => c.key),
        };
    }
};

watch(
    () => props.availableColumns,
    () => initSelectionIfEmpty(),
    { immediate: true },
);

const allChecked = computed(
    () => state.value.columns.length === props.availableColumns.length,
);

const toggleAll = () => {
    state.value = {
        ...state.value,
        columns: allChecked.value
            ? []
            : props.availableColumns.map((c) => c.key),
    };
};

const toggleColumn = (key: string, checked: boolean | 'indeterminate') => {
    const next = new Set(state.value.columns);
    if (checked) {
        next.add(key);
    } else {
        next.delete(key);
    }
    state.value = { ...state.value, columns: Array.from(next) };
};

const setMode = (mode: ExportMode) => (state.value = { ...state.value, mode });
const setFormat = (format: ExportFormat) => (state.value = { ...state.value, format });
</script>

<template>
    <div class="flex flex-col gap-5">
        <!-- Mode toggle -->
        <div v-if="showTemplate" class="grid grid-cols-2 gap-2 rounded-lg border p-1">
            <button
                type="button"
                class="flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition"
                :class="state.mode === 'export'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-muted-foreground'"
                @click="setMode('export')"
            >
                <FileSpreadsheet class="h-4 w-4" />
                Export Data
            </button>
            <button
                type="button"
                class="flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition"
                :class="state.mode === 'template'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-muted-foreground'"
                @click="setMode('template')"
            >
                <FileText class="h-4 w-4" />
                Download Template
            </button>
        </div>

        <!-- Format -->
        <div class="space-y-2">
            <Label class="text-sm font-medium">Format</Label>
            <div class="grid grid-cols-2 gap-2">
                <button
                    type="button"
                    class="rounded-md border px-3 py-2 text-sm transition"
                    :class="state.format === 'xlsx' ? 'border-primary bg-primary/5' : 'hover:bg-muted'"
                    @click="setFormat('xlsx')"
                >
                    Excel (.xlsx)
                </button>
                <button
                    type="button"
                    class="rounded-md border px-3 py-2 text-sm transition"
                    :class="state.format === 'csv' ? 'border-primary bg-primary/5' : 'hover:bg-muted'"
                    @click="setFormat('csv')"
                >
                    CSV (.csv)
                </button>
            </div>
        </div>

        <!-- Columns -->
        <div class="space-y-2">
            <div class="flex items-center justify-between">
                <Label class="text-sm font-medium">
                    Columns ({{ state.columns.length }} / {{ availableColumns.length }})
                </Label>
                <button
                    type="button"
                    class="text-xs text-primary hover:underline"
                    @click="toggleAll"
                >
                    {{ allChecked ? 'Select none' : 'Select all' }}
                </button>
            </div>

            <div class="max-h-72 space-y-1.5 overflow-y-auto rounded-md border p-3">
                <label
                    v-for="col in availableColumns"
                    :key="col.key"
                    class="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-muted"
                >
                    <Checkbox
                        :model-value="state.columns.includes(col.key)"
                        @update:model-value="(v) => toggleColumn(col.key, v)"
                    />
                    <span>{{ col.label }}</span>
                </label>
            </div>
        </div>
    </div>
</template>
