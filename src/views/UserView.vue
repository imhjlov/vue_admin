<template>
  <div v-if="userInfo">
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script setup lang="ts">
import { fetchUserInfo } from '@/api';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const userInfo: any = ref(null);

const route = useRoute();

fetchUserInfo(route.params.user)
  .then(response => {
    userInfo.value = response.data;
  })
  .catch((err: any) => {
    console.log(err);
  });
</script>

<style scoped></style>
