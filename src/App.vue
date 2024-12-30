<script setup lang="ts">
  import { PageMainContent } from './shared/layouts'
  import HeaderSvg from 'shared/assets/images/bg-header-desktop.svg'
  import MainPage from 'shared/layouts/page/MainPage.vue'
  import AppJobs from 'pages/app-jobs/ui/AppJobs.vue'
</script>

<template>
  <div class="bg-teal-50">
    <MainPage>
      <HeaderSvg fill="red" class="header bg-teal-100" />
      <PageMainContent>
        <AppJobs />
      </PageMainContent>
    </MainPage>
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
