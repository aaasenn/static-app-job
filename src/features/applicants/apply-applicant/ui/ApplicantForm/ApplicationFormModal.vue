<script setup lang="ts">
import FullNameInput from '../fields/FullNameInput/FullNameInput.vue'
import CountrySelect from '../fields/CountrySelect/CountrySelect.vue'
import { SubmitButton } from 'shared/ui/SubmitButton'
import { useField, useForm } from 'vee-validate'
import { type FormValues } from '../../model/schema'
import DescriptionTextarea from '../fields/DescriptionTextarea/DescriptionTextarea.vue'
import { initialValues } from '../../model/initialValues'
import { schema as validationSchema } from '../../model/schema'
import { BaseModal } from 'shared/ui/Modal'

interface Props {
  visible: boolean
}

const { visible } = defineProps<Props>()
const emits = defineEmits<{ (e: 'closeModal'): void }>()

const {
  handleSubmit: handleVeeSubmit,
  meta,
  resetForm
} = useForm<FormValues>({
  initialValues,
  validationSchema
})

const { value: fullname } = useField<FormValues['fullname']>('fullname')
const { value: country } = useField<FormValues['country']>('country')
const { value: description } =
  useField<FormValues['description']>('description')

const handleSubmit = handleVeeSubmit((values) => {
  console.log(values)
})

const handleOutsideClick = () => {
  if (meta.value.dirty) {
    const confirmed = confirm('Are you sure want to close?')

    if (confirmed) {
      emits('closeModal')
      resetForm()
    }
  } else {
    emits('closeModal')
  }
}
</script>

<template>
  <BaseModal
    title="Type bio"
    :is-visible="visible"
    @on-click-outside="handleOutsideClick"
  >
    <div class="w-full flex flex-col gap-4">
      <form @submit.prevent="handleSubmit">
        <FullNameInput v-model="fullname" />
        <CountrySelect v-model="country" />
        <DescriptionTextarea v-model="description" />
        <SubmitButton label="Apply" />
      </form>
    </div>
  </BaseModal>
</template>
