<template>
    <main class="relative gradient-100  from-black from-75% to-secondary-color to-25% flex-1">
        <div class="flex mt-20 ml-12">
                <Suspense>
                    <IndexAnnuaire @get_prop="ChangePropToShow" :data="entreprises"/>
                </Suspense>
                <AboutAnnuaire :data="aboutProp" :interface="'entreprises'"/>
            </div>
    </main>
</template>

<script setup>
import { Suspense, ref, onMounted, watch } from 'vue';
import IndexAnnuaire from '../components/IndexAnnaire.vue'
import AboutAnnuaire from '@/components/AboutAnnuaire.vue';
import axios from 'axios';
import { useEntreprisesStore } from '@/store/Entreprises';
import { storeToRefs } from 'pinia';

var aboutProp = ref(null)

const entreprisesStore = useEntreprisesStore()
const { entreprises } = storeToRefs(entreprisesStore)
entreprisesStore.getEntreprises()

const ChangePropToShow = (prop) => {
    aboutProp.value = prop
    console.log(aboutProp)
}

onMounted(() => {
    entreprisesStore.getEntreprises()
});
</script>
