import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';

// Module aliases - explicit for reliable builds
const modulesPath = path.resolve(__dirname, 'Modules');
const moduleAliases: Record<string, string> = {
    '@employee': path.resolve(modulesPath, 'Employee/resources/js'),
    '@school': path.resolve(modulesPath, 'School/resources/js'),
};

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        // Skip wayfinder in CI/Docker builds (causes segfault)
        // Wayfinder disabled for production builds - only enable locally
        ...(process.env.NODE_ENV === 'production' ? [] : [wayfinder({
            formVariants: true,
        })]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@modules': modulesPath,
            ...moduleAliases,
        },
    },
    server: {
        fs: {
            // Allow serving files from Modules directory (git submodules)
            allow: ['.', 'Modules'],
        },
        watch: {
            // Watch files in Modules directory for HMR
            ignored: ['!**/Modules/**'],
        },
    },
});
