<script lang="ts" setup>
interface Props {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 1 | 2 | 3 | 4 | 5 | 6
}
const { as = 'div', size = 1 } = defineProps<Props>()

const sizes = {
  6: 'text-base',
  5: 'text-lg',
  4: 'text-xl',
  3: 'text-2xl',
  2: 'text-3xl',
  1: 'text-4xl'
}
</script>

<template>
  <component :is="as" class="font-bold" v-bind="$attrs" :class="sizes[size]">
    <slot />
  </component>
</template>
