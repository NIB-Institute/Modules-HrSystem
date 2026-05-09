<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Lock, ShieldCheck } from 'lucide-vue-next';
import { computed } from 'vue';
import { toast } from 'vue-sonner';
import type { Role } from '@/types/roles';

export interface ManageRolesFormShape {
    roles: number[];
    errors: Record<string, string>;
}

interface UserData {
    id: number;
    name: string;
    email: string;
    avatar?: string | null;
    roles?: Array<{ id: number; name: string }>;
}

interface Props {
    form: ManageRolesFormShape;
    user: UserData;
    roles: Role[];
}

const props = defineProps<Props>();

// Protected admin (mirrors UserForm.vue) — cannot remove super-admin role.
const PROTECTED_ADMIN_EMAIL = 'kouchlyhour@gmail.com';

const isProtectedAdmin = computed(() => props.user.email === PROTECTED_ADMIN_EMAIL);

const isRoleLocked = (role: Role): boolean =>
    isProtectedAdmin.value && role.name === 'super-admin';

const toggleRole = (role: Role) => {
    if (isRoleLocked(role)) {
        toast.error('Cannot remove super-admin role from this user.');
        return;
    }
    const index = props.form.roles.indexOf(role.id);
    if (index > -1) {
        props.form.roles.splice(index, 1);
    } else {
        props.form.roles.push(role.id);
    }
};

const selectedCount = computed(() => props.form.roles.length);
</script>

<template>
    <div class="space-y-4">
        <!-- User summary -->
        <Card>
            <CardContent class="flex items-center gap-4 pt-6">
                <div v-if="user.avatar" class="h-12 w-12 overflow-hidden rounded-full">
                    <img :src="user.avatar" :alt="user.name" class="h-full w-full object-cover" />
                </div>
                <div v-else class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <ShieldCheck class="h-5 w-5 text-primary" />
                </div>
                <div class="flex-1 min-w-0">
                    <h3 class="font-semibold truncate">{{ user.name }}</h3>
                    <p class="text-sm text-muted-foreground truncate">{{ user.email }}</p>
                </div>
                <Badge variant="secondary" class="font-mono">
                    {{ selectedCount }} {{ selectedCount === 1 ? 'role' : 'roles' }}
                </Badge>
            </CardContent>
        </Card>

        <!-- Role grid -->
        <div v-if="!roles.length" class="text-sm text-muted-foreground">
            No roles available.
        </div>
        <div v-else class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div
                v-for="role in roles"
                :key="role.id"
                :class="[
                    'flex items-center gap-3 rounded-lg border p-3 transition-colors',
                    isRoleLocked(role) ? 'cursor-not-allowed bg-muted/30 border-muted' : 'cursor-pointer',
                    props.form.roles.includes(role.id) && !isRoleLocked(role) ? 'border-primary bg-primary/5' : '',
                    !props.form.roles.includes(role.id) && !isRoleLocked(role) ? 'hover:bg-muted/50' : '',
                ]"
                @click="toggleRole(role)"
            >
                <Checkbox
                    :id="`role-${role.id}`"
                    :model-value="props.form.roles.includes(role.id)"
                    :disabled="isRoleLocked(role)"
                    @click.stop
                    @update:model-value="toggleRole(role)"
                />
                <div class="flex-1 min-w-0">
                    <Label
                        :for="`role-${role.id}`"
                        :class="[
                            'font-medium capitalize',
                            isRoleLocked(role) ? 'cursor-not-allowed text-muted-foreground' : 'cursor-pointer',
                        ]"
                    >
                        {{ role.name.replace('-', ' ') }}
                    </Label>
                    <p v-if="role.permissions_count" class="text-xs text-muted-foreground">
                        {{ role.permissions_count }} permissions
                    </p>
                </div>
                <Lock v-if="isRoleLocked(role)" class="h-4 w-4 shrink-0 text-muted-foreground" />
            </div>
        </div>

        <p v-if="props.form.errors.roles" class="text-sm text-destructive">
            {{ props.form.errors.roles }}
        </p>
    </div>
</template>
