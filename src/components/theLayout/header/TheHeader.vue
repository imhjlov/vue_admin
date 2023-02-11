<script setup lang="ts">
import { ref } from 'vue';

// const drawerLeft = ref(false);
</script>
<template lang="">
  <!-- header -->
  <!-- <q-header reveal class="bg-grey-3"> -->
  <div>
    <!-- <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" /> -->
    <span>Header </span>
    <ul class="header">
      <li><router-link to="/news">news</router-link> |</li>
      <li><router-link to="/jobs"> jobs</router-link> |</li>
      <li><router-link to="/ask"> ask</router-link></li>
    </ul>
  </div>
  <!-- </q-header> -->
  <!-- header -->
  <!-- <SideMenu /> -->
</template>

<!-- coped : 해당 컴포넌트에서만 적용되는 style, 자식에게 상속 안된다.-->
<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
  list-style: none;
}
</style>
