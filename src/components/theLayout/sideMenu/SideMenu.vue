<template lang="">
  <!-- left category menu -->
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
  <!-- left category menu -->
</template>
<script lang="ts">
export default {};
</script>
<style lang=""></style>
