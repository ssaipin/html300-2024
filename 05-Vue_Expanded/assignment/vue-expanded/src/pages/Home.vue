<script setup>
import { ref } from 'vue'

import PageHeader from '@/components/PageHeader.vue'

// Reactive state
const showWelcome = ref(true)

// Page content
const welcomeTitle = ref('Welcome to Bootstrap Project')
const alternativeTitle = ref('Bootstrap Framework Overview') 
const description = ref(
  'Bootstrap is a free open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript based design templates for typography, forms, buttons, navigation, and other interface components, as well as optional JavaScript extensions.'
)
const exploreText = ref('Explore different Bootstrap components across multiple pages.')
const buttonText = ref('Learn More')
const learnMoreLink = ref('https://getbootstrap.com/')
</script>

<template>
  <!-- 
    Bootstrap 4 classes:
    - d-flex: display flex 
    - flex-column: flex direction column 
    - min-vh-100: minimum viewport height 100% (ensures full screen height)
  -->
  

    <main class="container mt-5 bg-light p-4 rounded shadow-sm">
      <!-- Using PageHeader component -->
      <PageHeader>
        <!-- Named slot for title -->
        <template #title>
          {{ showWelcome ? welcomeTitle : alternativeTitle }}
        </template>

        <!-- Named slot for subtitle -->
        <template #subtitle>
          {{ description }}
        </template>

        <!-- Named slot for description -->
        <template #description>
          <hr class="my-4">
          <p>{{ exploreText }}</p>
          <a 
            :href="learnMoreLink"
            class="btn btn-primary text-white text-decoration-none mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ buttonText }}
          </a>
        </template>
      </PageHeader>
    </main>

</template>

<style scoped>

main {
  /* Adds subtle shadow for depth */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  /* Smooth transition for any hover effects */
  transition: all 0.3s ease;
}

/* Button hover effects */
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

/* Feature cards hover effect */
.col-md-4:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  main {
    margin-top: 2rem; /* Reduced margin on smaller screens */
    padding: 1.5rem;  /* Reduced padding on smaller screens */
  }
}

/* Accessibility improvements */
.btn:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Animation for content loading */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

main {
  animation: fadeIn 0.6s ease-out;
}
</style>
