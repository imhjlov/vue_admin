<template>
  <div class="q-md">
    <q-layout view="lHh LpR lFf" container style="height: 100vh">
      <q-header reveal class="bg-grey-3">
        <div>
          <q-btn
            flat
            @click="drawerLeft = !drawerLeft"
            round
            dense
            icon="menu"
          />
          <span>Header</span>
        </div>
      </q-header>

      <q-footer class="bg-grey-3">
        <div>
          <span>Footer</span>
        </div>
      </q-footer>

      <q-drawer
        v-model="drawerLeft"
        :width="200"
        :breakpoint="700"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
          </div>
        </q-scroll-area>
      </q-drawer>

      <div></div>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    return {
      drawerLeft: ref(false),
      drawerRight: ref(true),
    };
  },
};
</script>
