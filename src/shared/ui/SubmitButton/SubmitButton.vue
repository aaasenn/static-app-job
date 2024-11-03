<script setup lang="ts">
import { BaseButton } from '../BaseButton'
import { BaseButtonProps } from '../BaseButton'
import { ref } from 'vue'

const props = defineProps<BaseButtonProps>()

const submitBaseClasses = [
  'appearance-none',
  'block',
  'w-full',
  'px-4',
  'py-2',
  'rounded',
  'cursor-pointer',
  'bg-teal-600'
]

const submitHoverClasses = [
  'hover:bg-teal-50',
  'hover:border',
  'hover:border-solid',
  'hover:border-teal-600',
  'hover:text-teal-600',
  'transition',
  'duration-300'
]

const classes = ref([...submitBaseClasses, ...submitHoverClasses])
</script>

<template>
  <BaseButton type="submit" v-bind="props" :class="classes" />
</template>
