<template>
  <div class="common-layout">
    <ver-container direction="column">
      <ver-header>Header</ver-header>
      <ver-main>Main</ver-main>
    </ver-container>
  </div>
</template>

<script setup lang="ts">
import { VerContainer, VerHeader, VerMain } from '@versakit/ui'
</script>

<style scoped>
.common-layout {
  .ver-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }
  .ver-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf5ff;
    height: 150px;
  }
}
</style>
