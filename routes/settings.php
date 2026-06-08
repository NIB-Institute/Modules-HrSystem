<?php

use App\Http\Controllers\Settings\BackupController;
use App\Http\Controllers\Settings\LoginAlertsController;
use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\TwoFactorAuthenticationController;
use App\Http\Controllers\Settings\WidgetController;
use App\Services\LoginAlertsService;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::redirect('settings', '/settings/general');

    Route::get('settings/general', function (LoginAlertsService $service) {
        return Inertia::render('settings/General', [
            'loginAlerts' => $service->getForDisplay(),
            'roles' => \Spatie\Permission\Models\Role::orderBy('name')->pluck('name'),
        ]);
    })->name('general.edit');

    Route::patch('settings/login-alerts', [LoginAlertsController::class, 'update'])->name('login-alerts.update');
    Route::delete('settings/login-alerts/token', [LoginAlertsController::class, 'clearToken'])->name('login-alerts.clear-token');
    Route::post('settings/login-alerts/test', [LoginAlertsController::class, 'sendTest'])->name('login-alerts.test');

    Route::get('settings/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('settings/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('settings/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('settings/password', [PasswordController::class, 'edit'])->name('user-password.edit');

    Route::put('settings/password', [PasswordController::class, 'update'])
        ->middleware('throttle:6,1')
        ->name('user-password.update');

    Route::get('settings/appearance', function () {
        return Inertia::render('settings/Appearance');
    })->name('appearance.edit');

    Route::get('settings/two-factor', [TwoFactorAuthenticationController::class, 'show'])
        ->name('two-factor.show');
    Route::put('settings/two-factor/method', [TwoFactorAuthenticationController::class, 'updateMethod'])
        ->name('two-factor.method.update');

    Route::get('settings/widgets', [WidgetController::class, 'index'])->name('widgets.index');
    Route::patch('settings/widgets/{widget}', [WidgetController::class, 'update'])->name('widgets.update');
    Route::post('settings/widgets/order', [WidgetController::class, 'updateOrder'])->name('widgets.order');

    // Backup routes
    Route::get('settings/backup', [BackupController::class, 'index'])->name('backup.index');
    Route::post('settings/backup', [BackupController::class, 'store'])->name('backup.store');
    Route::get('settings/backup/download', [BackupController::class, 'download'])->name('backup.download');
    Route::delete('settings/backup', [BackupController::class, 'destroy'])->name('backup.destroy');
    Route::post('settings/backup/cleanup', [BackupController::class, 'cleanup'])->name('backup.cleanup');
});
