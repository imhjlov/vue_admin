<script setup lang="ts">
import TheLayout from './components/theLayout/TheLayout.vue';
import TheHeader from './components/theLayout/header/TheHeader.vue';
</script>

<template>
  <div id="app">
    <!-- <TheLayout> -->
    <TheHeader />
    <router-view></router-view>
    <!-- </TheLayout> -->
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
