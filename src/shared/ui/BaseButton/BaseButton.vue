<script setup lang="ts">
  import { BaseButtonProps } from './BaseButton.ts'

  const {
    as = 'button',
    asChild = false,
    label = 'Label'
  } = defineProps<BaseButtonProps>()
</script>

<template>
  <component :is="as" v-if="!asChild" class="border-none" v-bind="$attrs">
    <span v-if="label">{{ label }}</span>
    <slot />
  </component>
</template>
