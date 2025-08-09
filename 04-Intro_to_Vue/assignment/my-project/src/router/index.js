import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Gallery from '@/views/Gallery.vue'
import FAQ from '@/views/FAQ.vue'
import Layout from '@/views/Layout.vue'


// install vue router plugin
Vue.use(VueRouter)

// define the routes
const routes = [
    { path: '/', component: Home },
    { path: '/gallery', component: Gallery },
    { path: '/faq', component: FAQ },
    { path: '/layout', component: Layout }
];

export default new VueRouter({
    mode: 'history',
    routes
})