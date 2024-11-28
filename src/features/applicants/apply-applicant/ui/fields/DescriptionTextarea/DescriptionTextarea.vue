<script setup lang="ts">
const modelValue = defineModel<string>()

const id = 'textarea-application'
</script>

<template>
  <div class="flex flex-col">
    <label :for="id">About</label>
    <textarea
      :id="id"
      v-model="modelValue"
      class="block border-2 border-secondary rounded-lg p-2 focus:outline-none focus:border-primary shadow-sm transition duration-200 ease-in-out"
    ></textarea>
  </div>
</template>
