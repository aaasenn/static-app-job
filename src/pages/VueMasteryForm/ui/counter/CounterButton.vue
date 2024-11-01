<template>
  <button
    type="button"
    class="child"
    @click="handleClick"
    >
    Increase
  </button>
</template>

<script setup lang="ts">

const emit = defineEmits<(e: 'increaseCounter') => void>()
const handleClick = () => emit("increaseCounter");
</script>

<style scoped>
.child {
  border: 1px solid green;
}
</style>