<template>
  <div>
    {{ searchValue }}
    <SearchInput
      ref="inputRef"
      v-model="searchValue" />
    <Button @click="handleClick">
      Добавить дело
    </Button>
    <TodoItem
      v-for="({ title }, index) in todosList"
      :id="index"
      :key="index"
      :title="title"
      @remove-item="handleRemoveItem" />
  </div>
</template>

<script setup lang="ts">
import { Todo } from 'entities/todos';
import { TodoItem } from 'entities/todos';
import Button from 'shared/ui/Button/Button.vue';
import SearchInput from 'shared/ui/Input/SearchInput.vue';
import { ref } from 'vue'

const searchValue = ref<string>("");
const inputRef = ref<InstanceType<typeof SearchInput> | null>(null);
const todosList = ref<Todo[]>([])

const handleClick = () => {
  todosList.value.push({ id: new Date().toDateString(), title: searchValue.value })
  searchValue.value = ""
  if (inputRef.value) {
    inputRef.value.focusInput()
  }
}

const handleRemoveItem = (index: number) => {
  todosList.value = todosList.value.filter((elem ,idx) => idx !== index)
}

</script>

<style scoped>
.box {
  border: 1px solid springgreen;
}

.kakashka {
  color: aqua;
}
</style>