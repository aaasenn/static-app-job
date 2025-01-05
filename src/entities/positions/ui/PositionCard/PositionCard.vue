<script lang="ts" setup>
import { Flex } from 'shared/ui/Flex'
import PositionAvatar from '../PositionAvatar/PositionAvatar.vue'
import { PositionDTO } from 'entities/positions/model/dto'
import { computed } from 'vue'
import { Heading } from 'shared/ui/Heading'
import { Chip } from 'shared/ui/Chip'

interface Props extends PositionDTO {
  active?: boolean
}

const {
  active = false,
  company = 'Megafon',
  position = 'Senior Frontend Developer',
  postedAt = '1d ago',
  contract = 'Full Time',
  location = 'USA',
  languages = ['React', 'Java', 'Bash', 'Server Rendering']
} = defineProps<Props>()

const emits = defineEmits<{ (e: 'onChipClick', language: string): void }>()

const handleChipClick = (language: string) => {
  emits('onChipClick', language)
}

const positionFooterChips = computed(() => [postedAt, contract, location])
</script>

<template>
  <div
    class="bg-white border border-solid rounded w-full px-6 py-4"
    :class="{ ['border-l-4']: active, ['border-background-accent']: active }"
  >
    <div class="border border-solid border-gray-200 grid grid-cols-2">
      <!-- FIRST COLUMN -->
      <Flex justify="start" class="gap-4">
        <PositionAvatar />

        <Flex column align="start">
          <Heading :size="6" class="text-teal-600"> {{ company }}</Heading>
          <Heading :size="4" class="text-text-accent"> {{ position }}</Heading>
          <Flex as="div" justify="start" align="start" class="gap-6">
            <li
              v-for="(chipText, index) in positionFooterChips"
              :key="index"
              :class="{
                'list-none': index === 0,
                'text-text-secondary': true
              }"
            >
              {{ chipText }}
            </li>
          </Flex>
        </Flex>
      </Flex>

      <!-- SECOND COLUMN -->
      <Flex justify="end" class="gap-3">
        <Chip
          v-for="(language, index) in languages"
          :key="index"
          @click="() => handleChipClick(language)"
          >{{ language }}</Chip
        >
      </Flex>
    </div>
  </div>
</template>
