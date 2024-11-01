<template>
  <div class="content">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid green;
    min-width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
  }
</style>