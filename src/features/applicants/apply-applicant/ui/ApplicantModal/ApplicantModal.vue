<script setup lang="ts">
import { BaseButton } from 'shared/ui/BaseButton'
import { BaseModal } from 'shared/ui/Modal'
import { ref } from 'vue'
import ApplicantForm from '../ApplicantForm/ApplicantForm.vue'

const isVisible = ref(false)

const handleOpenModal = () => {
  isVisible.value = true
}
</script>

<template>
  <span>{{ isVisible }}</span>
  <BaseButton label="Apply" @click.stop="handleOpenModal" />
  <BaseModal
    title="Type bio"
    :is-visible="isVisible"
    @on-click-outside="isVisible = false"
  >
    <ApplicantForm />
  </BaseModal>
</template>
