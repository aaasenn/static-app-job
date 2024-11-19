<script setup lang="ts">
import { ref } from 'vue'
import { useHideOnOverlayClick } from './lib/useHideOnOverlayClick'

interface ModalProps {
  isVisible: boolean
  title?: string
}

const { isVisible, title } = defineProps<ModalProps>()
const contentModalRef = ref<HTMLDivElement | null>(null)

const emits = defineEmits<{ (e: 'onClickOutside'): void }>()

const handleOverlayClick = (event: MouseEvent) => {
  if (
    contentModalRef.value &&
    contentModalRef.value.contains(event.target as Node)
  ) {
    return
  }

  return emits('onClickOutside')
}
useHideOnOverlayClick({ enabled: true, onClose: handleOverlayClick })
</script>

<template>
  <Teleport v-if="isVisible" to="body" class="relative">
    <div
      class="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center"
    >
      <div ref="contentModalRef" class="fixed bg-white rounded py-4 px-3">
        <h2 class="m-0">{{ title }}</h2>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style lang="css" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
