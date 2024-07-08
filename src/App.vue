
<template>
  <div class="body flex flex-col min-h-lvh" id="body">
    <Navbarre/>
    <RouterView class="flex-1" v-slot="{ Component }" >
        <transition name="route" mode="out-in">
          <component :is="Component"> </component>
        </transition>
      </RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbarre from './components/NavBarre.vue'
import { Transition } from 'vue';
import { usePersonnesStore } from './store/Personnes';
import { useEntreprisesStore } from './store/Entreprises';

const PersonnesStore = usePersonnesStore()
const EntreprisesStore = useEntreprisesStore()
PersonnesStore.getPersonnes()
EntreprisesStore.getEntreprises()



</script>