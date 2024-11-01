<template>
  <div class="todoItem">
    {{ title }}
    <span
      class="danger-button"
      @click="handleRemoveItem(id)">x</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  id: number
}
const { title, id } = defineProps<Props>()

const emits = defineEmits<{(e: "removeItem", index: number): void}>();

const handleRemoveItem = (index: number) => {
  emits("removeItem", index)
}
</script>

<style scoped>
.todoItem {
  border: 1px solid blueviolet;
  padding: 4px 8px;
  border-radius: 50%;
}

.danger-button {
  background-color: red;
  color: black;
  cursor: pointer;
}
</style>