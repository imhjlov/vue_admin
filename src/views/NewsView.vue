<template>
  <!-- 최상위 엘리먼트는 1개만 있어야한다. 최상위 엘리먼트는 div 태그가 아니어도 된다. -->
  <div v-for="user in users" v-bind:key="user">{{ user.title }}</div>
</template>

<script setup lang="ts">
// setup은 export default가 필요없다.
import axios from 'axios';
import { ref } from 'vue';

const users: any = ref([]);

axios
  .get('https://api.hnpwa.com/v0/news/1.json')
  .then((response: any) => {
    users.value = response.data;
  })
  .catch((err: any) => {
    console.log(err);
  });
</script>

<!-- scoped : 현재 컴포넌트에만 style 지정 -->
<style scoped></style>
