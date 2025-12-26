// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // Dirección real de GitHub Pages
    site: 'https://javiernglz.github.io',
    // El nombre de la carpeta/repositorio en GitHub
    base: '/cyberspace4j',
    integrations: [mdx(), sitemap()],
});