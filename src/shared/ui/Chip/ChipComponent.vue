<script setup lang="ts"></script>

<template>
  <div
    v-bind="$attrs"
    class="rounded text-sm cursor-pointer bg-background text-text-accent font-bold px-2 py-1 hover:bg-background-accent hover:text-white transition"
  >
    <slot />
  </div>
</template>
