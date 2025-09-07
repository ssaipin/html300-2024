<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    
    <!-- Bootstrap container with top margin -->
    <main class="container mt-5">
      <h1 class="display-4 mb-4">{{ pageTitle }}</h1>
      
      <!-- Bootstrap accordion component -->
      <div class="accordion" id="faqAccordion">
        <!-- v-for loop to iterate through FAQ items -->
        <div 
          v-for="faq in faqItems" 
          :key="faq.id"
          class="accordion-item"
        >
          <!-- Accordion header with toggle button -->
          <h2 class="accordion-header" :id="'heading' + faq.id">
            <button 
              class="accordion-button"
              :class="{ collapsed: !faq.isOpen }"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + faq.id"
              :aria-expanded="faq.isOpen"
              :aria-controls="'collapse' + faq.id"
            >
              {{ faq.question }}
            </button>
          </h2>
          
          <!-- Accordion content body -->
          <div 
            :id="'collapse' + faq.id"
            class="accordion-collapse collapse"
            :class="{ show: faq.isOpen }"
            :aria-labelledby="'heading' + faq.id"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              <!-- v-if/v-else: Show different content types based on answer type -->
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

    <AppFooter />
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: 'FAQPage',
  components: {
    NavBar,
    AppFooter
  },
  data() {
    return {
      pageTitle: 'Bootstrap 5 Accordion',
      // FAQ items object array for v-for iteration
      faqItems: [
        {
          id: 'One',
          question: 'What is Accordion ?',
          answer: '<strong>Accordion</strong> is a UI (User Interface) component that lets users expand and collapse sections of content. <a href="https://getbootstrap.com/docs/5.3/components/accordion/">Learn more</a>',
          answerType: 'html',
          isOpen: true // First item open by default
        },
        {
          id: 'Two', 
          question: 'Example Use',
          answer: [
            'FAQs (Frequently Asked Questions)',
            'Product details (ex. specifications, reviews)',
            'Multi step forms or instructions',
            'Mobile friendly content toggles'
          ],
          answerType: 'list',
          isOpen: false
        },
        {
          id: 'Three',
          question: 'Why it\'s useful ?',
          answer: [
            'Save space',
            'Keep pages cleaner and more organized',
            'Let users control what they want to see'
          ],
          answerType: 'list',
          isOpen: false
        }
      ]
    }
  }
}
</script>