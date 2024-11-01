<template>
  <button>
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface Props {
  title: string
}

interface Lampa {
  brightness: 1 | 2 | 3 | 4 | 5 | 6,
  placement: 'on the table' | 'on the floor',
  color: 'white' | 'black'
}

const { title } = defineProps<Props>()
</script>

<style scoped>

</style>