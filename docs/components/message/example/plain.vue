<template>
  <div>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warn" @click="warning">warning</VerButton>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from '@versakit/ui'

const success = () => {
  VerMessage({
    type: 'success',
    plain: true,
    icon: 'ep:success-filled',
    content: '这是一条消息',
  })
}
const warning = () => {
  VerMessage({
    type: 'warn',
    plain: true,
    content: '这是一条消息',
    icon: 'ep:warning-filled',
  })
}

const info = () => {
  VerMessage({
    type: 'info',
    plain: true,
    content: '这是一条消息',
    icon: 'ep:info-filled',
  })
}

const error = () => {
  VerMessage({
    type: 'error',
    plain: true,
    content: '这是一条消息',
    icon: 'ep:circle-close-filled',
  })
}
</script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
