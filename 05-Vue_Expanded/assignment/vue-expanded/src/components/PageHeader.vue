<script setup>
// No logic needed, just a slot wrapper
</script>

<template>
  <header class="mb-4">
    <h1 class="display-4">
      <slot name="title">Default Page Title</slot>
    </h1>

    <p class="lead text-muted text-center" v-if="$slots.subtitle">
      <slot name="subtitle"></slot>
    </p>

    <div class="text-center mb-4" v-if="$slots.description">
      <slot name="description"></slot>
    </div>
  </header>
</template>
