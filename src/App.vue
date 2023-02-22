<script setup lang="ts">
// import TheLayout from './components/theLayout/TheLayout.vue';
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
