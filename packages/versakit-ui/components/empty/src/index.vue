<template>
  <div class="ver-empty">
    <ver-icon :name="icon" size="80" class="ver-empty__icon" color="c1c1c1" />
    <div>
      <slot
        name="content"
        v-if="props.showDescription"
        class="ver-empty__description"
      >
        {{ props.content }}
      </slot>
    </div>
    <div v-if="showButton" class="ver-empty__button">
      <VerButton ghost>看看别的</VerButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VerIcon } from '@versakit/icons'
import { VerButton } from '../../button/index'
import type { EmptyProps } from '../type/index'

defineOptions({ name: 'VerEmpty' })

const props = withDefaults(defineProps<EmptyProps>(), {
  icon: '',
  content: '你什么也找不到',
  showDescription: true,
  showButton: true,
})
</script>

<style>
@import '../style/index.css';
</style>
