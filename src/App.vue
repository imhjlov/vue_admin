<script setup lang="ts">
import TheLayout from './components/theLayout/TheLayout.vue';
import TheHeader from './components/theLayout/header/TheHeader.vue';
</script>

<template>
  <div id="app">
    <!-- <TheLayout> -->
    <TheHeader />
    <Transition name="page">
      <router-view></router-view>
    </Transition>
    <!-- </TheLayout> -->
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
