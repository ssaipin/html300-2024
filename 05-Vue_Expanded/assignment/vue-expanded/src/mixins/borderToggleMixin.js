// mixins/toggleBorderMixin.js
import { ref } from 'vue'

export default function useToggleBorder() {
  const hasBorder = ref(false)
  
  const toggleBorder = () => {
    hasBorder.value = !hasBorder.value
  }

  return { hasBorder, toggleBorder }
}
