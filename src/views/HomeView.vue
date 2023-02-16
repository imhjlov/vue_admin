<template>
  <div v-show="true">{{ title }}</div>
  <input v-model="title" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('');
</script>

<!-- scoped : 현재 컴포넌트에만 style 지정 -->
<style scoped></style>
