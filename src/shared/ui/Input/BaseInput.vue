<template>
  <label>{{ label }}</label>
  <input
    :type="type"
    :placeholder="label"
    v-model="modelValue"
    >
</template>

<script setup lang="ts">
import { InputTypeHTMLAttribute } from 'vue';

  interface Props {
    label?: string,
    type?: InputTypeHTMLAttribute,
    modelValue: string | number
  }

  const { label = '', type = 'text' } = defineProps<Props>()
  const [modelValue, modifiers] = defineModel<string>('value', {
    set: (value) => {
      if (modifiers.caps) {
        return value.toUpperCase();
      }
    }
  });
</script>

<style scoped>

</style>