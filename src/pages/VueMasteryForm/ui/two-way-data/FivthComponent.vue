<template>
  <div class="five" @click="handleClick">
    Hello I'm 5 component and i an ligtseagreen
    {{ model }}
  </div>
</template>

<script setup lang="ts">
  const model = defineModel<string>()
  const emit = defineEmits<(e: "changeFive") => void>()

  const handleClick = (event: Event) => {
    event.stopPropagation()
    emit('changeFive')
    }
</script>

<style scoped>
.five {
  border: 1px solid lightseagreen;
  padding: 4px;
}
</style>