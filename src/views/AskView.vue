<template>
  <!-- 최상위 엘리먼트는 1개만 있어야한다. 최상위 엘리먼트는 div 태그가 아니어도 된다. -->
  <div v-for="ask in asks" :key="ask">
    <a :href="ask.url"> {{ ask.title }}</a>
    <small>{{ ask.time_ago }} by {{ ask.user }}</small>
  </div>
</template>

<script setup lang="ts">
// setup은 export default가 필요없다.

// data() 대신 ref 사용하여 state 관리
import { fetchAskList } from '@/api';
import { ref } from 'vue';

const asks: any = ref([]);

fetchAskList()
  .then((response: any) => {
    asks.value = response.data;
  })
  .catch((err: any) => {
    console.log(err);
  });
</script>

<!-- scoped : 현재 컴포넌트에만 style 지정 -->
<style scoped></style>
