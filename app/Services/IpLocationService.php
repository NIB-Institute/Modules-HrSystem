<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Throwable;

class IpLocationService
{
    protected const CACHE_TTL_SECONDS = 86400;

    /**
     * @return array{label: string, isp: ?string, map_url: ?string}
     */
    public function lookup(?string $ip): array
    {
        if (! $ip || $ip === '') {
            return $this->unknown();
        }

        if (! filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
            return ['label' => 'Local network', 'isp' => null, 'map_url' => null];
        }

        return Cache::remember(
            "ip_location:{$ip}",
            self::CACHE_TTL_SECONDS,
            fn () => $this->fetch($ip),
        );
    }

    /**
     * @return array{label: string, isp: ?string, map_url: ?string}
     */
    protected function fetch(string $ip): array
    {
        try {
            $response = Http::timeout(2)
                ->get("http://ip-api.com/json/{$ip}", [
                    'fields' => 'status,country,countryCode,region,regionName,city,lat,lon,isp',
                ]);

            if (! $response->successful()) {
                return $this->unknown();
            }

            $body = $response->json();
            if (($body['status'] ?? null) !== 'success') {
                return $this->unknown();
            }

            $city = trim((string) ($body['city'] ?? ''));
            $regionName = trim((string) ($body['regionName'] ?? ''));
            $country = trim((string) ($body['country'] ?? ''));
            $code = trim((string) ($body['countryCode'] ?? ''));
            $isp = trim((string) ($body['isp'] ?? ''));
            $lat = $body['lat'] ?? null;
            $lon = $body['lon'] ?? null;

            $parts = array_values(array_filter(array_unique([$city, $regionName, $country]), fn ($v) => $v !== ''));
            if ($parts === []) {
                return $this->unknown();
            }

            $label = implode(', ', $parts) . ($code !== '' ? " ({$code})" : '');

            $mapUrl = (is_numeric($lat) && is_numeric($lon))
                ? "https://maps.google.com/?q={$lat},{$lon}"
                : null;

            return [
                'label' => $label,
                'isp' => $isp !== '' ? $isp : null,
                'map_url' => $mapUrl,
            ];
        } catch (Throwable) {
            return $this->unknown();
        }
    }

    /**
     * @return array{label: string, isp: ?string, map_url: ?string}
     */
    protected function unknown(): array
    {
        return ['label' => 'Unknown', 'isp' => null, 'map_url' => null];
    }
}
