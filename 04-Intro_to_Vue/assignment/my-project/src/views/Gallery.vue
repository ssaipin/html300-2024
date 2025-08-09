<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    
    <!-- Bootstrap container with margin for spacing -->
    <main class="container my-5">
      <h1 class="display-4 mb-4">{{ pageTitle }}</h1>
      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>

      <h2 class="my-5">{{ gallerySubtitle }}</h2>

      <!-- Carousel -->
      <div class="carousel-wrapper mx-auto mb-5">
        <div id="carouselSlide" class="carousel slide">
          <div class="carousel-inner">
            <!-- v-for loop carousel images -->
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

          <!-- Carousel Control buttons -->
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#carouselSlide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- Image Grid -->
      <!-- col-xs-12 col-sm-6 col-md-4: 1 image per row on phone, 2 on tablet, 3 on desktop -->
      <div class="row g-4 text-center">
        <!-- v-for loop grid images -->
        <div 
          v-for="image in gridImages" 
          :key="image.src"
          class="col-xs-12 col-sm-6 col-md-4"
        >
          <img 
            :src="image.src" 
            class="img-fluid rounded w-75" 
            :alt="image.alt"
          >
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
  name: 'GalleryPage',
  components: {
    NavBar,
    AppFooter
  },
  data() {
    return {
      // Page content variables
      pageTitle: 'Nodoguro Omakase',
      description1: 'Nodoguro is a Japanese restaurant in Portland that offers a 25-course kaiseki-style tasting menu, blending traditional Japanese techniques with seasonal Pacific Northwest ingredients. The meal progresses from light vegetables and raw seafood to broths, steamed and grilled dishes, and ends with rice and sushi.',
      description2: 'This was such a wonderful experience. It was my first Japanese omakase experience that wasn\'t just sushi. All of the dishes were amazing and the sake pairing was lovely.',
      gallerySubtitle: 'Here are some the images of the dishes',
      
      // Carousel images array for v-for iteration
      carouselImages: [
        { src: require('@/assets/images/IMG_01.jpeg'), alt: 'Image 1' },
        { src: require('@/assets/images/IMG_02.jpeg'), alt: 'Image 2' },
        { src: require('@/assets/images/IMG_03.jpeg'), alt: 'Image 3' },
        { src: require('@/assets/images/IMG_04.jpeg'), alt: 'Image 4' },
        { src: require('@/assets/images/IMG_05.jpeg'), alt: 'Image 5' },
        { src: require('@/assets/images/IMG_06.jpeg'), alt: 'Image 6' }
      ],
      
      // Grid images array for v-for iteration
      gridImages: [
        { src: require('@/assets/images/IMG_07.jpeg'), alt: 'Image 7' },
        { src: require('@/assets/images/IMG_08.jpeg'), alt: 'Image 8' },
        { src: require('@/assets/images/IMG_09.jpeg'), alt: 'Image 9' },
        { src: require('@/assets/images/IMG_10.jpeg'), alt: 'Image 10' },
        { src: require('@/assets/images/IMG_11.jpeg'), alt: 'Image 11' },
        { src: require('@/assets/images/IMG_12.jpeg'), alt: 'Image 12' }
      ],
    };
  },
};
</script>