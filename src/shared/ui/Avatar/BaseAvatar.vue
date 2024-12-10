<script setup lang="ts">
type Size = 'large' | 'medium' | 'small'

interface Props {
  src: string
  size: Size
}
const { src } = defineProps<Props>()

const dimensions: Record<Size, string[]> = {
  large: ['w-[86px], h-[86px]'],
  medium: ['w-[64px], h-[64px]'],
  small: ['w-[64px], h-[64px]']
}
</script>

<template>
  <div class="rounded-full max-w-fit max-h-[86px]">
    <img class="rounded-full" :class="dimensions[size]" :src />
  </div>
</template>
