<?php

namespace App\Providers;

use App\Services\MenuService;
use App\Services\TenantService;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Force HTTPS in production (Railway serves via HTTPS proxy)
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }

        $this->registerInertiaModalShim();
        $this->registerDashboardMenuItems();
    }

    /**
     * Shim for the based/momentum-modal package, which doesn't support
     * inertia-laravel ^3. Modules call Inertia::modal(...)->baseRoute(...)
     * for create/edit forms; degrade gracefully to a full-page render.
     */
    protected function registerInertiaModalShim(): void
    {
        if (! Inertia::hasMacro('modal')) {
            Inertia::macro('modal', function (string $component, array|\Illuminate\Contracts\Support\Arrayable $props = []) {
                return new \Momentum\Modal\Modal(
                    $component,
                    Inertia::getShared() ?? [],
                    is_array($props) ? $props : $props->toArray(),
                    'app',
                    Inertia::getVersion(),
                );
            });
        }

        if (! InertiaResponse::hasMacro('baseRoute')) {
            InertiaResponse::macro('baseRoute', function (string $name, array $parameters = []) {
                return $this;
            });
        }
    }

    /**
     * Register dashboard menu items in the sidebar.
     */
    protected function registerDashboardMenuItems(): void
    {
        $this->app->booted(function () {
            // Register Dashboard Settings in footer navigation
            MenuService::addMenuItem(
                menu: 'footer',
                id: 'dashboard-settings',
                title: __('Settings'),
                url: '/dashboard/settings',
                icon: 'Settings',
                order: 50,
                permissions: 'settings.view_any',
                route: 'dashboard.settings'
            );

            MenuService::addSubmenuItem(
                'footer',
                'dashboard-settings',
                __('Dashboard'),
                '/dashboard/settings',
                10,
                'settings.view_any',
                'dashboard.settings',
                'LayoutGrid'
            );

            MenuService::addSubmenuItem(
                'footer',
                'dashboard-settings',
                __('Login Settings'),
                '/dashboard/settings/login',
                30,
                'settings.manage',
                'settings.login',
                'LogIn'
            );

            MenuService::addSubmenuItem(
                'footer',
                'dashboard-settings',
                __('Roles & Permissions'),
                '/dashboard/settings/roles',
                50,
                'roles.view_any',
                'settings.roles.index',
                'Shield'
            );

            MenuService::addSubmenuItem(
                'footer',
                'dashboard-settings',
                __('User Management'),
                '/dashboard/settings/users',
                60,
                'users.view_any',
                'settings.users.index',
                'Users'
            );

            MenuService::addSubmenuItem(
                'footer',
                'dashboard-settings',
                __('Activity Log'),
                '/dashboard/settings/activity-log',
                70,
                'activity_logs.view_any',
                'settings.activity-log',
                'Activity'
            );

            MenuService::addSubmenuItem(
                'footer',
                'dashboard-settings',
                __('Privacy & Security'),
                '/settings/two-factor',
                80,
                null, // No permission required - all users can manage their own 2FA
                'two-factor.show',
                'Shield'
            );
        });
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Register TenantService as singleton
        $this->app->singleton(TenantService::class);

        // Telescope removed; not installed in hrSystem.
    }
}
