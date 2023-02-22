<script setup lang="ts">
// console.log(process.env.NODE_ENV);

// const drawerLeft = ref(false);
</script>
<template lang="">
  <!-- header -->
  <!-- <q-header reveal class="bg-grey-3"> -->
  <div>
    <!-- <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" /> -->
    <span>Header </span>
    <ul class="header" className="text-white bg-[#42b883] flex p-8px list-none">
      <li><router-link to="/news">news</router-link> |</li>
      <li><router-link to="/jobs"> jobs</router-link> |</li>
      <li><router-link to="/ask"> ask</router-link></li>
    </ul>
  </div>
  <!-- </q-header> -->
  <!-- header -->
  <!-- <SideMenu /> -->
</template>
