<script setup lang="ts">
import { BaseButtonProps } from './BaseButton.ts'

const { as = 'button', asChild = false, label } = defineProps<BaseButtonProps>()
</script>

<template>
  <component :is="as" v-if="!asChild" v-bind="$attrs" class="border-none">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </component>
</template>
