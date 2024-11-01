<template>
  <div class="four" @click="handleClickFour">
    {{ model }}
    {{ four }}
    <FivthComponent v-model="model" @change-five="handleChangeFive" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FivthComponent from './FivthComponent.vue';
  const emit = defineEmits<(e: "changeThree") => void>()
  const model = defineModel<string>()
  const four = ref(4);

  const handleChangeFive = () => {
    four.value += 4
  }

  const handleClickFour = (event: Event) => {
    event.stopPropagation();
    emit("changeThree")
    }
</script>

<style scoped>
.four {
  border: 1px solid green;
  padding: 4px;
}
</style>