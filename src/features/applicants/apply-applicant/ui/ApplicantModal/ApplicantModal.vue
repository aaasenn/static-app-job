<script setup lang="ts">
import { BaseButton } from 'shared/ui/BaseButton'
import { ref } from 'vue'
import { default as ApplicantFormModal } from '../ApplicantForm/ApplicationFormModal.vue'

const isVisible = ref(false)

const handleOpenModal = () => {
  isVisible.value = true
}

const handleCloseModal = () => {
  isVisible.value = false
}
</script>

<template>
  <span>{{ isVisible }}</span>
  <BaseButton label="Apply" @click.stop="handleOpenModal" />
  <ApplicantFormModal :visible="isVisible" @close-modal="handleCloseModal" />
</template>
