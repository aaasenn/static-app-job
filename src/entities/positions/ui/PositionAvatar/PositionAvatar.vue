<script lang="ts" setup>
import { mockedImg } from '../../lib/mockedPositionImage'
import { Avatar } from 'shared/ui/Avatar'
</script>

<template>
  <Avatar :src="mockedImg" size="large" />
</template>
