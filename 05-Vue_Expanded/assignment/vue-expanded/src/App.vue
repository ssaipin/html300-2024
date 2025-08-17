<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <NavBar />

    <main>
      <router-view>

      </router-view>
    </main>

    <AppFooter />
  </div>
</template>

<script>
// Import the components to make them available
import NavBar from '@/components/Navbar.vue';
import AppFooter from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter,
  },
};
</script>

<style>
/* Optional global styles */
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>