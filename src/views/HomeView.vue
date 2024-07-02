
<template>
  <main class="relative gradient-100  from-secondary-color from-50% to-primary-color to-50%">
    <div class="absolute flex flex-row w-auto items-center gap-36 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
      <ButtonRedirectionAnnuaire :color="'#B99AB4'" :description="'Personnes'" :image="'personnes.png'" :href="'/personnes'"  />
      <ButtonCreate @eventButton="togglePopIn" />
      <ButtonRedirectionAnnuaire :color="'#5EBAA9'" :description="'Entreprises'" :image="'entreprises.png'" :href="'/entreprises'" />
      <PopInCreate  v-if="isOpen" :isOpen="isOpen" @closePop="togglePopIn"/>
    </div>
  </main>
</template>

<script setup>
import ButtonCreate from '../components/ButtonCreate.vue'
import ButtonRedirectionAnnuaire from '../components/ButtonRedirectionAnnuaire.vue'
import PopInCreate from '../components/PopInCreate.vue'
import { ref } from 'vue';

const isOpen = ref(false)

const togglePopIn = () => {
  isOpen.value = !isOpen.value
  console.log(isOpen.value)
}

</script>

<style>

</style>