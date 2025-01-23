import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            api: '/src/api',
            components: '/src/components',
            fonts: '/src/fonts',
            hooks: '/src/hooks',
            img: '/src/img',
            models: '/src/models',
            pages: '/src/pages',
            store: '/src/store',
            style: '/src/style',
            utils: '/src/utils',
        },
    },
});
