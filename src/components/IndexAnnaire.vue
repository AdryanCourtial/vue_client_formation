<template>
    <div class="flex flex-col h-auto w-auto">
        <input type="text" class="border-1 rounded-full w-[400px] h-10 mb-12 drop-shadow-result-annuaire text-center">
            <div class="flex flex-col justify-start w-fit h-[450px] gap-2 overflow-y-auto overflow-hidden">
                <Suspense v-for="prop in personneStore.listPersonnes" :key="prop.id">
                    <div @click="$emit('get_prop', prop)">
                        <ResultAnnuairePersonnes :props="prop"/>
                    </div>
                    <template #fallback>
                        <h1 class="text-red-600 text-2xl"> HOOOOOO</h1>
                    </template>
                </Suspense>
            </div>
    </div>

</template>

<script setup>
import ResultAnnuairePersonnes from './ResultAnnuairePersonnes.vue'
import axios from 'axios';
import { ref, Suspense, onMounted } from 'vue';
import { useListPersonnesStore } from '@/stores/ListPersonnes';

const props = defineProps({
    url : {
        type: String,
    }
})
const personneStore = useListPersonnesStore()

const propsAnnuaire = ref(null)
onMounted(async () => {
    personneStore.getPersonnes()
    console.log(personneStore.listPersonnes)
    try {
        const request = await axios.get(props.url)
        propsAnnuaire.value = request.data
    } catch (error) {
        console.error("Probleme pas cool au niveau de la requete API", error);
    }
});

</script>

<style>

::-webkit-scrollbar {
  width: 5px;
  background-color: white;
  border-radius: 90px;
  margin-left: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 90px;
}

</style>