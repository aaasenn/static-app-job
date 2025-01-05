<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { Flex } from 'shared/ui/Flex'
import { getPositionsOptions } from 'entities/positions'
import PositionCard from 'entities/positions/ui/PositionCard/PositionCard.vue'
import { computed, reactive } from 'vue'

const { data, isLoading } = useQuery({
  ...getPositionsOptions
})

const filters = reactive<Record<string, boolean>>({})
const filtersList = computed(() => Object.keys(filters))

const handleChipClick = (language: string) => {
  if (filters[language]) {
    delete filters[language]
  } else {
    filters[language] = true
  }
}
</script>

<template>
  <div class="absolute border border-solid border-red-500">
    {{ filtersList.join(',') }}
  </div>
  <Flex v-if="!isLoading" column class="h-full overflow-scroll">
    <PositionCard
      v-for="position in data"
      :key="position.id"
      :active="true"
      v-bind="position"
      @on-chip-click="handleChipClick"
    />
  </Flex>
</template>

<style scoped></style>
