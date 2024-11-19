import { onUnmounted, onUpdated } from "vue"

interface Config {
  enabled: boolean,
  onClose: (event: MouseEvent) => void,
}

export const useHideOnOverlayClick = ({ enabled, onClose }: Config) => {
  if (!enabled) {
    return;
  }

  onUpdated(() => {
    document.addEventListener('click', onClose)
  })

  onUnmounted(() => {
    document.removeEventListener('click', onClose)
  })
}