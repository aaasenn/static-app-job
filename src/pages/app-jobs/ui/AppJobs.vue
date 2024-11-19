<script setup lang="ts">
import { BaseInput } from 'shared/ui/Input'
import { BaseModal } from 'shared/ui/Modal'
import { BaseSelect } from 'shared/ui/Select'
import { SubmitButton } from 'shared/ui/SubmitButton'
import { ref } from 'vue'

const isVisible = ref(false)
const inputValue = ref('')

const options = [
  {
    label: 'USA',
    value: 'USA'
  },
  {
    label: 'UK',
    value: 'UK'
  }
]
</script>

<template>
  <div class="w-full">
    <SubmitButton
      @click.stop="isVisible = true"
      label="Submit"
      class="appearance-none"
    />
    <BaseModal
      :is-visible="isVisible"
      title="Privet"
      @on-click-outside="isVisible = false"
    />
    <BaseInput v-model="inputValue" />
    <div>{{ inputValue }}</div>
    <BaseSelect :options="options" placeholder="privet" label="pribet" />
  </div>
</template>

<style scoped></style>
