<script setup lang="ts">
import { ref, watch } from 'vue';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { LucideIcon } from 'lucide-vue-next';

export interface InnerSidebarItem {
    key: string;
    title: string;
    icon?: LucideIcon;
    badge?: string;
}

const props = withDefaults(
    defineProps<{
        items: InnerSidebarItem[];
        modelValue?: string;
        sidebarWidthClass?: string;
    }>(),
    {
        sidebarWidthClass: 'md:w-48',
    },
);

const emit = defineEmits<{
    'update:modelValue': [value: string];
}>();

const initial = props.modelValue ?? props.items[0]?.key ?? '';
const internal = ref<string>(initial);

watch(
    () => props.modelValue,
    (v) => {
        if (v !== undefined && v !== internal.value) internal.value = v;
    },
);

const select = (key: string) => {
    if (internal.value !== key) {
        internal.value = key;
        emit('update:modelValue', key);
    }
};
</script>

<template>
    <div class="flex flex-col gap-6 md:flex-row">
        <aside :class="['w-full shrink-0', sidebarWidthClass]">
            <nav class="flex flex-col gap-1">
                <Button
                    v-for="item in items"
                    :key="item.key"
                    type="button"
                    variant="ghost"
                    :class="[
                        'w-full justify-start',
                        internal === item.key ? 'bg-muted' : '',
                    ]"
                    @click="select(item.key)"
                >
                    <component v-if="item.icon" :is="item.icon" class="mr-2 h-4 w-4" />
                    <span class="flex-1 text-left">{{ item.title }}</span>
                    <Badge v-if="item.badge" variant="secondary" class="text-[10px]">{{ item.badge }}</Badge>
                </Button>
            </nav>
        </aside>

        <div class="flex-1 min-w-0">
            <slot :active="internal" />
        </div>
    </div>
</template>
