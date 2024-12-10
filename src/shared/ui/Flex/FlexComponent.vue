<script setup lang="ts">
type Justify = 'center' | 'start' | 'end' | 'between'
type Align = 'center' | 'start' | 'end'

interface Props {
  as?: string
  column?: boolean
  reversed?: boolean
  justify?: Justify
  align?: Align
}

const {
  justify = 'center',
  align = 'center',
  column = false,
  reversed = false,
  as = 'div'
} = defineProps<Props>()

const justifyClasses: Record<Justify, string> = {
  center: 'justify-center',
  end: 'justify-end',
  start: 'justify-start',
  between: 'justify-between'
}

const alignClasses: Record<Align, string> = {
  center: 'items-center',
  end: 'items-end',
  start: 'items-start'
}

const directionClasses = {
  ['flex-row']: !column && !reversed,
  ['flex-row-reverse']: !column && reversed,
  ['flex-col']: column && !reversed,
  ['flex-col-reverse']: column && reversed
}
</script>

<template>
  <component
    :is="as"
    class="flex"
    :class="[
      justifyClasses[justify],
      alignClasses[align],
      { ...directionClasses }
    ]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
