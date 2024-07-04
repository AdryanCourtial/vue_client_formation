<template>
    <main class="relative gradient-100  from-primary-color from-25% to-black to-25% flex-1">
        <div class="flex mt-20 ml-12">
                <Suspense>
                    <IndexAnnuaire @get_prop="ChangePropToShow" :data="personnes" :interface="'personnes'"/>

                    <template #fallback>
                        <WaitingSuspense :color="'#fffff'" :height="'400px'" :width="'850px'" />
                    </template>
                </Suspense>
                <AboutAnnuaire :data="aboutProp" :interface="'personnes'"/>
            </div>
        </main>
</template>

<script setup>
import { Suspense, ref, onMounted, watch } from 'vue';
import IndexAnnuaire from '../components/IndexAnnaire.vue';
import AboutAnnuaire from '@/components/AboutAnnuaire.vue';
import { usePersonnesStore } from '@/store/Personnes';
import { storeToRefs } from 'pinia';
import WaitingSuspense from '@/components/WaitingSuspense.vue';

const propsAnnuaire = ref(null)
var aboutProp = ref(null)

const PersonnesStore = usePersonnesStore()
const { personnes } = storeToRefs(PersonnesStore)
PersonnesStore.getPersonnes()

const ChangePropToShow = (prop) => {
    aboutProp.value = prop
    console.log(aboutProp)
}

onMounted(() => {
    PersonnesStore.getPersonnes()
});


</script>
