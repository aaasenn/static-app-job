<script setup lang="ts">
import { reactive } from 'vue'
import DescriptionTextarea from '../fields/DescriptionTextarea/DescriptionTextarea.vue'
import FullNameInput from '../fields/FullNameInput/FullNameInput.vue'
import CountrySelect from '../fields/CountrySelect/CountrySelect.vue'
import { SubmitButton } from 'shared/ui/SubmitButton'
import { Form, Field } from 'vee-validate'

const formValues = reactive({
  fullName: '',
  country: '',
  description: ''
})

const handleSubmit = (values) => {
  console.log('enter')
  console.log(values)
}
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <h2 class="mb-0 p-0">Without veevalidate</h2>
    <!-- <FullNameInput v-model="formValues.fullName" />
    <CountrySelect v-model="formValues.country" />
    <DescriptionTextarea v-model="formValues.description" /> -->
    <SubmitButton label="Apply" />
  </div>
  <div class="w-full flex flex-col gap-4">
    <Form @submit="handleSubmit">
      <Field name="fullname" type="text" :as="FullNameInput" />
      <Field name="country" :as="CountrySelect" />
      <Field name="description" v-slot="{ field }">
        <DescriptionTextarea v-bind="field" />
        <span>{{ field.value }}</span>
      </Field>
      <button>submit</button>
    </Form>
  </div>
</template>
