<script setup lang="ts">
import TheHeader from './header/TheHeader.vue';
import TheFooter from './footer/TheFooter.vue';
import TheContent from './content/TheContent.vue';
</script>

<template>
  <div class="q-md">
    <q-layout view="lHh LpR lFf" container style="height: 100vh">
      <TheHeader />
      <TheContent />
      <TheFooter />
    </q-layout>
  </div>
</template>
