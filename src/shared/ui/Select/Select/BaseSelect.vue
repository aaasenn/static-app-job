<script setup lang="ts">
import BaseOption from '../Option/BaseOption.vue'
import { BaseSelectProps } from './Select'

const { options } = defineProps<BaseSelectProps>()

const emits = defineEmits<{ (e: 'onSelectChange', value: string): void }>()
</script>

<template>
  <select v-bind="$attrs">
    <BaseOption
      v-for="option in options"
      :value="option.value"
      :label="option.label"
      :key="option.value"
      on
    />
  </select>
</template>
