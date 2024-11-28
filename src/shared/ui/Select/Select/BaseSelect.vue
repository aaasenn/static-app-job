<script setup lang="ts">
import BaseOption from '../Option/BaseOption.vue'
import { BaseSelectProps } from './Select'

const { options, placeholder } = defineProps<BaseSelectProps>()
const modelValue = defineModel<string>({
  default: ''
})

const baseClasses =
  'block bg-white border-2 w-[300px] border-secondary cursor-pointer rounded-lg p-2 focus:outline-none focus:border-primary shadow-sm transition duration-200 ease-in-out'
const placeholderClasses = 'text-text-secondary'
</script>

<template>
  <select
    v-bind="$attrs"
    v-model="modelValue"
    :class="{
      [baseClasses]: true,
      [placeholderClasses]: !Boolean(modelValue[0])
    }"
  >
    <BaseOption
      v-if="placeholder"
      v-show="false"
      key="empty"
      value=""
      :label="placeholder"
      class="placeholder-option"
    />
    <BaseOption
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :label="option.label"
      class="text-black"
    />
  </select>
</template>
