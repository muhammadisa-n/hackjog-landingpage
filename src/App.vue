<template>
  <FromBootstrap/>
  <FromTailwind/>
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FromBootstrap from './components/HelloFromBootstrap.vue';
import FromTailwind from './components/HelloFromTailwind.vue';
</script>


<style scoped>
</style>
