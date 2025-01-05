import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

async function enableMocking() { 
  const { worker } = await import('./app/msw/worker')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}
 
enableMocking().then(() => {
  createApp(App).use(VueQueryPlugin).mount('#app')
})


