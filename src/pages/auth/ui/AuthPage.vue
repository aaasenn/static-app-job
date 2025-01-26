<script setup lang="ts">
  import { navigate } from 'shared/lib/router'
  import { SubmitButton } from 'shared/ui/SubmitButton'

  const handleApplicantButtonClick = () => {
    sessionStorage.setItem('auth', 'applicant')
    navigate({ name: 'applicant' })
  }

  const handleCompanyButtonClick = () => {
    sessionStorage.setItem('auth', 'company')
    navigate({ name: 'company' })
  }
</script>

<template>
  <SubmitButton label="Applicant" @click="handleApplicantButtonClick" />
  <SubmitButton label="Company" @click="handleCompanyButtonClick" />"
</template>
