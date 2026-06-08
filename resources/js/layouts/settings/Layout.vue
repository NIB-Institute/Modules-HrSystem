<script setup lang="ts">
import { ref, computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import Heading from '@/components/Heading.vue';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { toUrl, urlIsActive } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { index as backupIndex } from '@/routes/backup';
import { edit as editProfile } from '@/routes/profile';
import { show as showTwoFactor } from '@/routes/two-factor';
import { edit as editPassword } from '@/routes/user-password';
import { index as widgetsIndex } from '@/routes/widgets';
import type { NavItem } from '@/types';
import {
    Settings2,
    UserCircle,
    Palette,
    Database,
    ChevronRight,
    Bell,
    BellRing,
    KeyRound,
    ShieldCheck,
    LayoutDashboard,
    Users,
    type LucideIcon,
} from 'lucide-vue-next';

interface NavGroup {
    title: string;
    icon: LucideIcon;
    children: NavItem[];
}

type NavEntry = NavGroup | NavItem;

const navTree: NavEntry[] = [
    {
        title: 'General',
        icon: Settings2,
        children: [
            { title: 'Login Alerts', href: '/settings/general', icon: Bell },
        ],
    },
    {
        title: 'Employee Settings',
        icon: Users,
        children: [
            { title: 'Notification Plan', href: '/settings/employee/plan-notifications', icon: BellRing },
        ],
    },
    {
        title: 'Account',
        icon: UserCircle,
        children: [
            { title: 'Profile', href: editProfile(), icon: UserCircle },
            { title: 'Password', href: editPassword(), icon: KeyRound },
            { title: 'Two-Factor Authentication', href: showTwoFactor(), icon: ShieldCheck },
        ],
    },
    {
        title: 'Display',
        icon: Palette,
        children: [
            { title: 'Appearance', href: editAppearance(), icon: Palette },
            { title: 'Widgets', href: widgetsIndex(), icon: LayoutDashboard },
        ],
    },
    {
        title: 'Backup',
        href: backupIndex(),
        icon: Database,
    },
];

const isGroup = (e: NavEntry): e is NavGroup => 'children' in e;

const currentPath = ref(typeof window !== 'undefined' ? window.location.pathname : '');

const isActive = (href: NavItem['href']) => urlIsActive(href, currentPath.value);

const groupHasActive = (g: NavGroup) => g.children.some((c) => isActive(c.href));

const openState = ref<Record<string, boolean>>(
    Object.fromEntries(
        navTree
            .filter(isGroup)
            .map((g) => [g.title, groupHasActive(g) || g.title === 'General']),
    ),
);

const orderedGroups = computed(() => navTree);
</script>

<template>
    <div class="px-4 py-6">
        <Heading title="Dashboard Settings"
            description="Manage your account, dashboard preferences and notifications" />

        <div class="flex flex-col lg:flex-row lg:space-x-12">
            <aside class="w-full max-w-xl lg:w-60">
                <nav class="flex flex-col space-y-1">
                    <template v-for="entry in orderedGroups" :key="entry.title">
                        <!-- Group with children -->
                        <Collapsible v-if="isGroup(entry)" v-model:open="openState[entry.title]">
                            <CollapsibleTrigger as-child>
                                <Button variant="ghost" class="w-full justify-start group/collapsible"
                                    :class="{ 'bg-muted/40': groupHasActive(entry) }">
                                    <component :is="entry.icon" class="h-4 w-4 mr-2" />
                                    <span class="flex-1 text-left">{{ entry.title }}</span>
                                    <ChevronRight
                                        class="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div class="ml-6 mt-1 flex flex-col space-y-1 border-l pl-2">
                                    <Button v-for="child in entry.children" :key="toUrl(child.href)" variant="ghost"
                                        size="sm"
                                        :class="['w-full justify-start', { 'bg-muted': isActive(child.href) }]"
                                        as-child>
                                        <Link :href="child.href">
                                            <component v-if="child.icon" :is="child.icon" class="h-4 w-4 mr-2" />
                                            {{ child.title }}
                                        </Link>
                                    </Button>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>

                        <!-- Flat item -->
                        <Button v-else variant="ghost"
                            :class="['w-full justify-start', { 'bg-muted': isActive(entry.href) }]" as-child>
                            <Link :href="entry.href">
                                <component v-if="entry.icon" :is="entry.icon" class="h-4 w-4 mr-2" />
                                {{ entry.title }}
                            </Link>
                        </Button>
                    </template>
                </nav>
            </aside>

            <Separator class="my-6 lg:hidden" />

            <div class="flex-1 min-w-0">
                <section class="space-y-12">
                    <slot />
                </section>
            </div>
        </div>
    </div>
</template>
