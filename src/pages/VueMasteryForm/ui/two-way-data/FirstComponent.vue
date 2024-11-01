<template>
  <div class="one">
    <input
      v-model="modelValue"
      type="text">
    <SecondComponent v-model="modelValue" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SecondComponent from './SecondComponent.vue';

const modelValue = ref<string>('Hello')
</script>

<style scoped>
.one {
  border: 1px solid crimson;
  padding: 4px;
}
</style>