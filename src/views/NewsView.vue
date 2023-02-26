<template>
  <!-- 최상위 엘리먼트는 1개만 있어야한다. 최상위 엘리먼트는 div 태그가 아니어도 된다. -->
  <p>NEWS</p>
  <div v-for="user in users" :key="user">
    <a :href="user.url"> {{ user.title }}</a>
    <small
      >{{ user.time_ago }} by
      <router-link :to="`/user/${user.user}`">{{
        user.user
      }}</router-link></small
    >
  </div>
</template>

<script setup lang="ts">
// setup은 export default가 필요없다.
import { fetchNewsList } from '@/api';
import { ref } from 'vue';

const users: any = ref([]);

fetchNewsList()
  .then((response: any) => {
    users.value = response.data;
  })
  .catch((err: any) => {
    console.log(err);
  });
</script>

<!-- scoped : 현재 컴포넌트에만 style 지정 -->
<style scoped></style>
