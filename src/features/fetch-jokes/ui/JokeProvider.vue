<template>
  <slot :data="data" :loading="loading" />
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const API_ENDPOINT_URL = 'https://official-joke-api.appspot.com/random_joke'

const data = reactive({
  setup: null,
  punchline: null
})
const loading = ref<boolean>(false)

const fetchJoke = async () => {
  loading.value = true

  const response = await fetch(API_ENDPOINT_URL)
  const responseData = await response.json()

  data.setup = responseData.setup
  data.punchline = responseData.punchline
  loading.value = false
}

fetchJoke()
</script>
