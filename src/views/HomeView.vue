
<template>
  <main class="relative gradient-100  from-secondary-color from-50% to-primary-color to-50%">
    <div class="absolute flex flex-row w-auto items-center gap-36 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
      <ButtonRedirectionAnnuaire class="hover:scale-125 duration-300" :color="'#B99AB4'" :description="'Personnes'" :image="'personnes.png'" :href="'/personnes'"  />
      <div class="flex flex-col">
        <img src="/danse.gif" alt="">
        <ButtonCreate @eventButton="togglePopIn" />
      </div>
      <ButtonRedirectionAnnuaire class="hover:scale-125 duration-300" :color="'#5EBAA9'" :description="'Entreprises'" :image="'entreprises.png'" :href="'/entreprises'" />
      <Transition name="popin">
        <PopInCreate v-if="isOpen" :isOpen="isOpen" @closePop="togglePopIn"/>
      </Transition>
    </div>
  </main>
</template>

<script setup>
import ButtonCreate from '../components/ButtonCreate.vue'
import ButtonRedirectionAnnuaire from '../components/ButtonRedirectionAnnuaire.vue'
import PopInCreate from '../components/PopInCreate.vue'
import { ref, Transition  } from 'vue';

const isOpen = ref(false)

const togglePopIn = () => {
  isOpen.value = !isOpen.value
  console.log(isOpen.value)
}

</script>

<style>
.popin-enter-active,
.popin-leave-active {
  transition: opacity 0.8s ease;
}

.popin-enter-from,
.popin-leave-to {
  opacity: 0;
}
</style>