<script setup lang="ts">
import { ref } from 'vue';
import SideMenu from '../sideMenu/SideMenu.vue';

const drawerLeft = ref(false);
</script>

<template>
  <!-- header -->
  <q-header reveal class="bg-grey-3">
    <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
    <span>Header</span>
  </q-header>
  <!-- header -->

  <!-- sidemenu -->
  <q-drawer
    v-model="drawerLeft"
    @click="drawerLeft = false"
    :width="200"
    :breakpoint="700"
    bordered
    class="bg-grey-3"
  >
    <SideMenu />
  </q-drawer>
  <!-- sidemenu -->
</template>
