import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import Gallery from '@/pages/Gallery.vue';
import FAQ from '@/pages/FAQ.vue';
import Layout from '@/pages/Layout.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ
    },
    {
        path: '/layout',
        name: 'Layout',
        component: Layout
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;