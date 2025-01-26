<script setup lang="ts">
  import { ExitSessionButton } from 'features/auth/exit-session'
  import { Flex } from 'shared/ui/Flex'
  import { Header } from 'shared/ui/Header'
</script>

<template>
  <div class="bg-teal-50">
    <Flex
      column
      class="border border-solid border-orange-500 max-h-screen overflow-hidden"
    >
      <Header>
        <ExitSessionButton class="absolute border border-solid border-black" />
      </Header>
      <div class="h-max-full border border-solid border-red-600 overflow-auto">
        <RouterView />
      </div>
    </Flex>
  </div>
</template>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
