<script setup>
import { defineProps } from 'vue'
import useToggleBorder from '@/mixins/borderToggleMixin.js'

const props = defineProps({
    src: { type: String, required: true },
    alt: { type: String, required: true },
    title: { type: String, required: true }
    
  });

  // use border toggle mixin
const { hasBorder, toggleBorder } = useToggleBorder();

</script>

<template>
    <div class="col-xs-12 col-sm-6 col-md-4 text-center">
         <!-- 
      Bootstrap 4 classes used:
      - img-fluid: Makes image responsive (max-width: 100%, height: auto)
      - rounded: Adds border-radius for rounded corners
      - w-75: Sets width to 75% of parent container
      - border-primary: Adds primary colored border when active
    -->
        <img
            :src="props.src"
            :alt="props.alt"
            :title="props.title"
            class="img-fluid rounded w-75"
            :class="{ 'border border-primary': hasBorder}" 
            @click="toggleBorder"
        />
    </div>
</template>

<style scoped>

img:hover {
  opacity: 0.8;
  transform: scale(1.02);
}

img {
  cursor: pointer; 
  transition: all 0.3s ease; /* Smooth transition for border changes */
  border: 2px solid transparent;
}

</style>