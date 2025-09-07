<script setup>
import { ref, computed } from 'vue'
import PageHeader from '@/components/PageHeader.vue'

const pageTitle = ref('Bootstrap Accordion FAQ')
const faqItems = ref([
    {
    id: 'One',
    question: 'What is an Accordion?',
    answer: '<strong>Accordion</strong> is a UI (User Interface) component that lets users expand and collapse sections of content. <a href="https://getbootstrap.com/docs/5.3/components/accordion/" target="_blank" rel="noopener noreferrer" class="text-decoration-none">Learn more</a>',
    answerType: 'html',
    isOpen: true // First item open by default
    },
    {
    id: 'Two', 
    question: 'Common Use Cases',
    answer: [
      'FAQs (Frequently Asked Questions)',
      'Product details (specifications, reviews, features)',
      'Multi-step forms or instructions',
      'Mobile-friendly content toggles',
      'Documentation sections',
      'Settings and configuration panels'
    ],
    answerType: 'list',
    isOpen: false
  },
  {
    id: 'Three',
    question: 'Why Use Accordions?',
    answer: [
      'Save vertical space on the page',
      'Keep pages cleaner and more organized',
      'Let users control what content they want to see',
      'Improve mobile user experience',
      'Reduce cognitive load',
      'Group related information together'
    ],
    answerType: 'list',
    isOpen: false
  },
   {
    id: 'Four',
    question: 'Accordion Best Practices',
    answer: [
      'Use clear and descriptive headings',
      'Keep content sections focused and concise',
      'Consider having one section open by default',
      'Use consistent styling throughout',
      'Ensure keyboard accessibility',
      'Test on mobile devices'
    ],
    answerType: 'list',
    isOpen: false
  }   
])

// open FAQ items
const openFaq = computed(() => {
  return faqItems.value.filter(faq => faq.isOpen).length
})


const toggleFaq = (id) => {
  const selectedFaq = faqItems.value.find(faq => faq.id === id);
  if (selectedFaq) {
    // Optional: close all other items for a single-open accordion effect
    faqItems.value.forEach(faq => {
      if (faq.id !== id) {
        faq.isOpen = false;
      }
    });
    // Toggle the selected item
    selectedFaq.isOpen = !selectedFaq.isOpen;
  }
};
</script>

<template>
  
    <main class="container mt-5">
      <!-- Using PageHeader instead of hardcoded header -->
      <PageHeader>
        <template #title>{{ pageTitle }}</template>
        <template #subtitle>Interactive Content Organization</template>
        <template #description>
          <p>Learn about Bootstrap accordion components and their practical applications in modern web development.</p>
        </template>
      </PageHeader>

      <div class="accordion" id="faqAccordion">
        <!-- v-for loop through FAQ items -->
        <div 
          v-for="faq in faqItems" 
          :key="faq.id"
          class="accordion-item mb-3"
        >
        <!--Accordion header with toggle button-->
        <h2 class="accordion-header" :id="'heading' + faq.id">
            <button 
              class="accordion-button"
              :class="{ collapsed: !faq.isOpen }"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + faq.id"
              :aria-expanded="faq.isOpen"
              :aria-controls="'collapse' + faq.id"
              @click="toggleFaq(faq.id)"
            >
              {{ faq.question }}
            </button>
          </h2>

            <!--Accordion content-->
            <div
                :id="'collapse' + faq.id"
                class="accordion-collapse collapse"
                :class="{ show: faq.isOpen }"
                :aria-labelledby="'heading' + faq.id"
                data-bs-parent="#faqAccordion"
            >
            <div class="accordion-body">
              <div v-if="faq.answerType === 'html'" v-html="faq.answer"></div>
              <div v-else-if="faq.answerType === 'list'">
                <ul>
                  <li v-for="item in faq.answer" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div v-else>{{ faq.answer }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>

</template>

<style scoped>

.accordion-button {
  font-weight: 500;
  transition: all 0.3s ease;
  background-color: rgb(187, 240, 252);
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  outline: none;
  transition: 0.4s;
  border: 1px solid white;
  border-radius: 8px;
}

.accordion-button:not(.collapsed) {
  font-size: 0.9em;

}

</style>

       