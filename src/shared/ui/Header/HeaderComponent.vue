<script setup lang="ts">
  import HeaderSvg from '../../assets/images/bg-header-desktop.svg'
</script>

<template>
  <div class="flex relative">
    <HeaderSvg class="header bg-teal-100 border border-solid" />
    <slot />
  </div>
</template>
