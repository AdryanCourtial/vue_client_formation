<template>
    <main class="relative gradient-100  from-primary-color from-25% to-black to-25% flex-1">
        <div class="flex mt-20 ml-12">
                <Suspense>
                    <IndexAnnuaire :url="'http://127.0.0.1:8000/api/personnes'" @get_prop="ChangePropToShow" :interface="'personnes'"/>
                </Suspense>
                <AboutAnnuaire :data="aboutProp" :interface="'personnes'"/>
            </div>
        </main>
</template>

<script setup>
import { Suspense, ref } from 'vue';
import IndexAnnuaire from '../components/IndexAnnaire.vue';
import AboutAnnuaire from '@/components/AboutAnnuaire.vue';

var aboutProp = ref(null)

const ChangePropToShow = (prop) => {
    aboutProp.value = prop
    console.log(aboutProp)
}




</script>
