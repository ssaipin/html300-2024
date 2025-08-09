<template>
    <div class="d-flex flex-column min-vh-100">
        <NavBar />

        <!--Bootstrap container with secondary bg and padding-->
        <main class="container mt-5 bg-secondary-subtle p-4 rounded">
            <div class="text-center">
                <!-- v-if/v-else : show different content based on welcome state-->
                 <h1 v-if="showWelcome" class="display-4">{{ welcomeTitle }}</h1>
                 <h1 v-else class="display-4">{{ alternativeTitle }}</h1>

                 <p class="lead pt-3">{{ description }}</p>
                 <hr class="my-4">
                 <p>{{ exploreText }}</p>

                 
                 <a 
                    :href="learnMoreLink"
                    class="btn btn-primary link-light text-decoration-none mt-2"
                    target="_blank">
                    {{ buttonText }}
                 </a>
            </div>
        </main>

        <AppFooter />
    </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    AppFooter
  },
  data() {
    return {
      // v-if condition variable
      showWelcome: true,
      // Page content variables instead of hardcoded text
      welcomeTitle: 'Welcome to Bootstrap Project',
      alternativeTitle: 'Bootstrap Framework Overview',
      description: 'Bootstrap is a free open-source CSS framework directed at responsive and mobile-first front-end web development.',
      exploreText: 'Explore different Bootstrap components across multiple pages.',
      buttonText: 'Learn More',
      learnMoreLink: 'https://getbootstrap.com/',
    }
  }
}
</script>