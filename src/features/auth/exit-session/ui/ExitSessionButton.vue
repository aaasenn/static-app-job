<script setup lang="ts">
  import { BaseButton } from 'shared/ui/BaseButton'

  const handleExit = () => {
    sessionStorage.removeItem('auth')
  }
</script>

<template>
  <BaseButton
    label="Exit"
    class="border border-solid border-red-600"
    @click="handleExit"
  />
</template>
