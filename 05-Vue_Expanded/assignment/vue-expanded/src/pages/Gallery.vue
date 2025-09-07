<script setup>
import { ref } from 'vue'
import GalleryImage from '@/components/GalleryCard.vue'
import PageHeader from '@/components/PageHeader.vue'

// Import all images for the carousel
import img01 from '@/assets/images/IMG_01.jpeg'
import img02 from '@/assets/images/IMG_02.jpeg'
import img03 from '@/assets/images/IMG_03.jpeg'
import img04 from '@/assets/images/IMG_04.jpeg'
import img05 from '@/assets/images/IMG_05.jpeg'
import img06 from '@/assets/images/IMG_06.jpeg'

// Import all images for the grid
import img07 from '@/assets/images/IMG_07.jpeg'
import img08 from '@/assets/images/IMG_08.jpeg'
import img09 from '@/assets/images/IMG_09.jpeg'
import img10 from '@/assets/images/IMG_10.jpeg'
import img11 from '@/assets/images/IMG_11.jpeg'
import img12 from '@/assets/images/IMG_12.jpeg'

// Page text content
const pageTitle = ref('Nodoguro Omakase')
const description1 = ref('Nodoguro is a Japanese restaurant in Portland that offers a 25-course kaiseki-style tasting menu, blending traditional Japanese techniques with seasonal Pacific Northwest ingredients.')
const description2 = ref(`This was such a wonderful experience. It was my first Japanese Omakase experience that wans't just sushi. All of the dishes were amazing and the sake pairing was lovely.`)
const gallerySubtitle = ref('Here are some images of the dishes')

// Carousel images
const carouselImages = ref([
  { src: img01, alt: 'Image 1' },
  { src: img02, alt: 'Image 2' },
  { src: img03, alt: 'Image 3' },
  { src: img04, alt: 'Image 4' },
  { src: img05, alt: 'Image 5' },
  { src: img06, alt: 'Image 6' }
])

// Grid images (add title for prop)
// each image will have the border toggle functionality from the mixin
const gridImages = ref([
  { src: img07, alt: 'Image 7', title: 'Dish 7' },
  { src: img08, alt: 'Image 8', title: 'Dish 8' },
  { src: img09, alt: 'Image 9', title: 'Dish 9' },
  { src: img10, alt: 'Image 10', title: 'Dish 10' },
  { src: img11, alt: 'Image 11', title: 'Dish 11' },
  { src: img12, alt: 'Image 12', title: 'Dish 12' }
])
</script>

<template>
  

    <main class="container my-5">
      <!-- Use PageHeader with slot -->
      <PageHeader>
        <template #title>{{ pageTitle }}</template>
      </PageHeader>

      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>

      <h2 class="my-5">{{ gallerySubtitle }}</h2>

      <!-- Carousel -->
      <div class="carousel-wrapper mx-auto mb-5">
        <div id="carouselSlide" class="carousel slide">
          <div class="carousel-inner">
            <div 
              v-for="(image, index) in carouselImages" 
              :key="image.src"
              class="carousel-item"
              :class="{ active: index === 0 }"
            >
              <img 
                :src="image.src" 
                class="d-block w-100 rounded" 
                :alt="image.alt"
              >
            </div>
          </div>

          <button 
            class="carousel-control-prev" 
            type="button" 
            data-bs-target="#carouselSlide" 
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button 
            class="carousel-control-next" 
            type="button" 
            data-bs-target="#carouselSlide" 
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- Image Grid -->
      <div class="row g-4 text-center">
        <div 
          v-for="image in gridImages" 
          :key="image.src"
          class="col-12 col-sm-6 col-md-4"
        >
          <GalleryImage 
            :src="image.src" 
            :alt="image.alt" 
            :title="image.title"
            class="img-fluid rounded w-75" 
          />
        </div>
      </div>
    </main>

</template>

<style scoped>

.carousel-wrapper {
  max-width: 400px; /* Limits carousel width on large screens */
}

/* Responsive adjustments for carousel */
@media (max-width: 768px) {
  .carousel-wrapper {
    max-width: 70%;
  }
}

.col-12:hover .img-fluid {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
</style>