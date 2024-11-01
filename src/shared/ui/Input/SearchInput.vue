<template>
  <div>
    <input type="text" v-model="modelValue" class="container" ref="inputRef"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

  const modelValue = defineModel<string>()
  const inputRef = ref(null)

  defineExpose({
    focusInput() {
      if (inputRef.value) {
        inputRef.value.focus()
      }
    }
  })
</script>

<style scoped>
  .container {
    display: block;
    width: 80%;
    border: 1px solid black;
  }
</style>