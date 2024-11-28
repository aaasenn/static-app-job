<template>
  <input
    v-model="model"
    v-bind="$attrs"
    class="block border-2 border-secondary rounded-lg p-2 focus:outline-none focus:border-primary shadow-sm transition duration-200 ease-in-out"
  />
</template>

<script setup lang="ts">
const model = defineModel<string>()
</script>
