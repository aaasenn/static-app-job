<script setup lang="ts">
import { BaseSelect } from 'shared/ui/Select'

const options = [
  {
    label: 'USA',
    value: 'usa'
  },
  {
    label: 'UK',
    value: 'uk'
  }
]

const id = 'select'
const countryValueModel = defineModel<string>()
</script>

<template>
  <div>
    <label :for="id"> Country </label>
    <BaseSelect
      :id="id"
      v-model="countryValueModel"
      :options="options"
      placeholder="privet"
      label="pribet"
    />
  </div>
</template>
