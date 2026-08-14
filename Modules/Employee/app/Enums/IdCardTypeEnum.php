<?php

namespace Modules\Employee\Enums;

enum IdCardTypeEnum: string
{
    case NATIONAL_ID = 'national_id';
    case PASSPORT = 'passport';
    case DRIVER_LICENSE = 'driver_license';
    case FAMILY_BOOK = 'family_book';

    /**
     * Get the display label for the card type.
     */
    public function label(): string
    {
        return match ($this) {
            self::NATIONAL_ID => 'National ID',
            self::PASSPORT => 'Passport',
            self::DRIVER_LICENSE => 'Driver License',
            self::FAMILY_BOOK => 'Family Book',
        };
    }

    /**
     * Get all card types as options array.
     */
    public static function options(): array
    {
        return array_map(
            fn (self $case) => [
                'value' => $case->value,
                'label' => $case->label(),
            ],
            self::cases()
        );
    }

    /**
     * Get all card type values.
     */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
