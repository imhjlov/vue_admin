<template>
  <div v-if="askItem">
    <section>
      <!-- 질문 상세 정보 -->
      <div>사용자 프로필</div>
      <div>
        <router-link :to="`/user/${askItem.url}`">
          {{ askItem.user }}</router-link
        >
      </div>
      <div>{{ askItem.time_ago }}</div>
      <h2>{{ askItem.title }}</h2>
    </section>
    <!-- 질문 뎃글 -->
    <section>
      <div v-html="askItem.content"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { fetchAskItem } from '@/api';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const askItem: any = ref(null);
const route = useRoute();
fetchAskItem(route.query.id)
  .then(res => {
    askItem.value = res.data;
  })
  .catch(err => {
    console.log(err);
  });
</script>

<style scoped></style>
