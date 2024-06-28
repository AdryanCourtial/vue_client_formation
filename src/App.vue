
<template>
  <div class="flex flex-col min-h-lvh">
    <Navbarre/>
    <RouterView class="flex-1" ></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbarre from './components/NavBarre.vue'

</script>

<style scoped>

</style>
