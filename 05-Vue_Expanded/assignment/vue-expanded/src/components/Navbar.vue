<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// Get the current route to check for active links
const $route = useRoute();

// Brand name variable
const brandName = ref('Bootstrap');

// Navigation items array
const navItems = ref([
    { name: 'Home', path: '/', label: 'Home' },
    { name: 'Gallery', path: '/gallery', label: 'Gallery' },
    { name: 'FAQ', path: '/faq', label: 'FAQ' },
    { name: 'Layout', path: '/layout', label: 'Layout' }
]);
</script>

<template>
    <header class="navbar navbar-expand-md bg-info">
        <div class="container-fluid">
            <router-link class="navbar-brand navbar-dark" to="/">{{ brandName }}</router-link>

            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span> 
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li 
                        v-for="item in navItems"
                        :key="item.name"
                        class="nav-item">
                        <router-link 
                            class="nav-link"
                            :class="{ 'active fw-bold': $route.name === item.name }"
                            :to="item.path">
                            {{ item.label }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>