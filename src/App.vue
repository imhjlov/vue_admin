<template>
  <div id="app">
    <Transition name="page">
      <TheLayout></TheLayout>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import TheLayout from './components/theLayout/TheLayout.vue';
</script>
