<template>
    <main class="relative gradient-100  from-primary-color from-25% to-black to-25% flex-1">
        <div class="flex mt-20 ml-12">
                <Suspense>
                    <IndexAnnuaire :url="'http://127.0.0.1:8000/api/personnes'" @get_prop="ChangePropToShow"/>
                </Suspense>
                <AboutAnnuaire :data="aboutProp" :interface="'personnes'" />
            </div>
        </main>
</template>

<script setup>
import { Suspense, onMounted, ref } from 'vue';
import IndexAnnuaire from '../components/IndexAnnaire.vue';
import AboutAnnuaire from '@/components/AboutAnnuaire.vue';
import { useListPersonnesStore } from '@/stores/ListPersonnes';

var aboutProp = ref(null)


// onMounted(() => {
//     const personneStore = useListPersonnesStore()
//     personneStore.getPersonnes()
//     console.log(personneStore.listPersonnes)
// })

const ChangePropToShow = (prop) => {
    aboutProp.value = prop
    console.log(aboutProp)
}


</script>
