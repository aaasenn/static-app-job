<template>
  <form>
    <FirstComponent />
    <CounterVue />
    {{ v }}
    <BaseInput v-model.caps="v" />
  </form>
</template>

<script setup lang="ts">
import FirstComponent from './ui/two-way-data/FirstComponent.vue';
import CounterVue from './ui/counter/CounterVue.vue';
import { ref } from 'vue';
import BaseInput from 'shared/ui/Input/BaseInput.vue';
const v = ref("Privet");
</script>

<style scoped>
  .form {
    border: 1px solid slategray
  }
</style>