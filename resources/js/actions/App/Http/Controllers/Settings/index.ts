import WidgetController from './WidgetController'
import LoginSettingsController from './LoginSettingsController'
import RoleController from './RoleController'
import UserRoleController from './UserRoleController'
import ActivityLogController from './ActivityLogController'
import AvatarController from './AvatarController'
import LoginAlertsController from './LoginAlertsController'
import PlanNotificationController from './PlanNotificationController'
import TelegramChatsController from './TelegramChatsController'
import ProfileController from './ProfileController'
import PasswordController from './PasswordController'
import TwoFactorAuthenticationController from './TwoFactorAuthenticationController'
import BackupController from './BackupController'

const Settings = {
    WidgetController: Object.assign(WidgetController, WidgetController),
    LoginSettingsController: Object.assign(LoginSettingsController, LoginSettingsController),
    RoleController: Object.assign(RoleController, RoleController),
    UserRoleController: Object.assign(UserRoleController, UserRoleController),
    ActivityLogController: Object.assign(ActivityLogController, ActivityLogController),
    AvatarController: Object.assign(AvatarController, AvatarController),
    LoginAlertsController: Object.assign(LoginAlertsController, LoginAlertsController),
    PlanNotificationController: Object.assign(PlanNotificationController, PlanNotificationController),
    TelegramChatsController: Object.assign(TelegramChatsController, TelegramChatsController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    PasswordController: Object.assign(PasswordController, PasswordController),
    TwoFactorAuthenticationController: Object.assign(TwoFactorAuthenticationController, TwoFactorAuthenticationController),
    BackupController: Object.assign(BackupController, BackupController),
}

export default Settings