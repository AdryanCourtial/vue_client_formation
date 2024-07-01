<template>
    <div class="flex flex-col h-auto w-auto">
        <div>
            <input type="text" class="border-1 rounded-full w-[400px] h-10 mb-12 drop-shadow-result-annuaire text-center"
            @input="getSearchResults"
            v-model="SearchQuery"
            placeholder="Veuillez rentrer un nom"
            >

        </div>
            <div class="flex flex-col justify-start w-fit h-[450px] gap-2 overflow-y-auto overflow-hidden">
                <Suspense v-for="prop in list" :key="prop.id">
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

const props = defineProps({
    url : {
        type: String,
    },
    interface: {
        type: String,
    }
})

const propsAnnuaire = ref(null)
const list = ref([])
const SearchQuery = ref("")
const QueryTimeout = ref(0)
const QueryResults = ref([])

const getSearchResults = () => {
    QueryResults.value = []
    clearTimeout(QueryTimeout.value)
    QueryTimeout.value = setTimeout(() => {
        if (SearchQuery.value === " ") {
            list.value = propsAnnuaire.value
        } else {
            propsAnnuaire.value.forEach(element => {
                if (element.nom.toLowerCase().includes(SearchQuery.value.toLowerCase())) {
                    QueryResults.value.push(element)
                } else if (props.interface === 'personnes' && element.prenom.toLowerCase().includes(SearchQuery.value.toLowerCase())){
                        QueryResults.value.push(element)
                }
            });
        }
        list.value = QueryResults.value
    }, 300)
}


onMounted(async () => {
    try {
        const request = await axios.get(props.url)
        propsAnnuaire.value = request.data
        list.value = propsAnnuaire.value
        console.log(propsAnnuaire.value)
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