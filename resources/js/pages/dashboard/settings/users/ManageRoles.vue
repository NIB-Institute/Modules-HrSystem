<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import MangerRolesForm from '@/pages/components/dashboard/v1/MangerRolesForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import { toast } from 'vue-sonner';
import type { Role } from '@/types/roles';

interface UserData {
    id: number;
    name: string;
    email: string;
    avatar?: string | null;
    roles?: Array<{ id: number; name: string }>;
}

interface Props {
    user: UserData;
    roles: Role[];
    isSuperAdmin?: boolean;
}

const props = defineProps<Props>();

const { show, close, redirect } = useModal();

const isOpen = computed({
    get: () => show.value,
    set: (val: boolean) => {
        if (!val) {
            close();
            redirect();
        }
    },
});

const form = useForm({
    roles: (props.user.roles ?? []).map(r => r.id) as number[],
});

const isFormInvalid = computed(() => form.roles.length === 0);

const handleSubmit = () => {
    form.put(`/dashboard/settings/users/${props.user.id}/manage-roles`, {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Roles updated successfully.');
            setTimeout(() => {
                close();
                redirect();
            }, 100);
        },
        onError: () => {
            toast.error('Failed to update roles.');
        },
    });
};

const handleCancel = () => {
    close();
    redirect();
};
</script>

<template>
    <ModalForm
        v-model:open="isOpen"
        :title="`Manage Roles · ${props.user.name}`"
        description="Adjust which roles apply to this user without touching the rest of their profile."
        mode="edit"
        size="lg"
        submit-text="Save Roles"
        :loading="form.processing"
        :disabled="isFormInvalid"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <MangerRolesForm
            :form="form"
            :user="props.user"
            :roles="props.roles"
        />
    </ModalForm>
</template>
