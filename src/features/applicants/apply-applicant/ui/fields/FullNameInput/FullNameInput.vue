<script setup lang="ts">
import { BaseInput } from 'shared/ui/Input'

const model = defineModel<string>()

const id = 'fullname_input'
</script>

<template>
  <div class="flex flex-col">
    <label class="mb-1" :for="id">Fullname</label>
    <BaseInput :id="id" class="w-inherit" v-model="model" />
  </div>
</template>
