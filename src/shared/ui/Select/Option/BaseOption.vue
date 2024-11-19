<script setup lang="ts">
import { Option } from './Option'

const { value, label } = defineProps<Option>()
</script>

<template>
  <option :value="value" :label="label" v-bind="$attrs"></option>
</template>
