<!--reusable components-->

<template>
    <!--Bootstrap navbar with expand on md and larger screens-->
    <header class="navbar navbar-expand-md bg-info">
        <div class="container-fluid">
            <!--Brand logo/link-->
            <router-link class="navbar-brand navbar-dark" to="/">{{ brandName }}</router-link>

            <!--Mobile hamburger toggle button-->
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span> 
            </button>

            <!--Collapsible navigaton menu-->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <!-- v-for loop to iterate through navigaton items-->
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

<script>
    export default {
        name: 'NavBar',
        data() {
            return {
                // Brand name variable for reusability
                brandName: 'Bootstrap',
                // Navigation items array for v-for iteration
                navItems: [
                    { name: 'Home', path: '/', label: 'Home' },
                    { name: 'Gallery', path: '/gallery', label: 'Gallery' },
                    { name: 'FAQ', path: '/faq', label: 'FAQ' },
                    { name: 'Layout', path: '/layout', label: 'Layout' }
                ]
            }
        }
    }
</script>