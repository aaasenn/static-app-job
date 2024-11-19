<script setup lang="ts">
import { BaseInput } from 'shared/ui/Input'

const model = defineModel<string>()

const id = 'fullname_input'
</script>

<template>
  <label>Fullname</label>
  <BaseInput v-model="model" :id="id" />
</template>
