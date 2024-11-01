<template>
  <div class="three">
    Hello im 3 component and i;m yellow
    {{ model }}
    {{ three }}
    <FourthComponent v-model="model" @change-three="handleThreeClick" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FourthComponent from './FourthComponent.vue';

const model = defineModel<string>()
const three = ref(3);

const handleThreeClick = () => {three.value += 3}
</script>

<style scoped>
.three {
  border: 1px solid yellow;
  padding: 4px;
}
</style>