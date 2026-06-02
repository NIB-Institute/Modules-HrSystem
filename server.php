<?php

/**
 * Router script for PHP's built-in dev server.
 *
 * Used as: php -S 0.0.0.0:$PORT server.php
 *
 * For each request, returns `false` if the URI maps to a real file in public/
 * (so PHP serves it directly as a static asset). Otherwise hands off to
 * Laravel's front controller at public/index.php.
 */

$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

if ($uri !== '/' && file_exists(__DIR__ . '/public' . $uri)) {
    return false;
}

require_once __DIR__ . '/public/index.php';
