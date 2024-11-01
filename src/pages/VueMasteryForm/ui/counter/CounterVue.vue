<template>
  <div>{{ counter }}</div>
  <button
    type="button"
    class="parent"
    @click="increaseCounter">
    Increase
  </button>
  <CounterButton @increase-counter="increaseCounter" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CounterButton from './CounterButton.vue';

const counter = ref(0)
const increaseCounter = () => counter.value += 1;
</script>

<style scoped>
.parent {
  border: 1px solid red;
}
</style>