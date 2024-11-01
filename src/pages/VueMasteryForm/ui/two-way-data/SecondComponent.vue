<template>
  <div>
    {{ model }}
    <ThirdComponent v-model="model" />
  </div>
</template>

<script setup lang="ts">
import ThirdComponent from './ThirdComponent.vue';

const model = defineModel<string>()
</script>

<style scoped>
.second {
  border: 1px solid orange;
  padding: 4px;
}
</style>