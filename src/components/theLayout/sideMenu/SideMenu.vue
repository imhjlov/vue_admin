<template>
  <!-- left category menu -->
  <q-scroll-area class="fit">
    <ul
      class="header"
      className="text-white bg-[#42b883] flex-col p-8px list-none"
    >
      <li v-for="category in categoryRouter" :key="category.name">
        <router-link :to="`${category.path}`">{{ category.name }}</router-link>
      </li>
    </ul>
  </q-scroll-area>
  <!-- left category menu -->
</template>

<script setup lang="ts">
import { categoryRouter } from '@/routes/categoryRouter';
</script>
