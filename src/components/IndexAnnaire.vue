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
import { ref, Suspense, onMounted, watch } from 'vue';
import { usePersonnesStore } from '@/store/Personnes';
import { useEntreprisesStore } from '@/store/Entreprises';

const props = defineProps({
    url : {
        type: String,
    },
    interface: {
        type: String,
    },
    data: {
        type: Object,
        default: null
    }
})

const list = ref([])
const SearchQuery = ref("")
const QueryTimeout = ref(0)
const QueryResults = ref([])


const getSearchResults = () => {
    QueryResults.value = []
    clearTimeout(QueryTimeout.value)
    QueryTimeout.value = setTimeout(() => {
        if (SearchQuery.value === " ") {
            list.value = props.data
        } else {
            props.data.forEach(element => {
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

watch(() => props.data, (newVal) => {
    list.value = newVal
})


onMounted(() => {
    list.value = props.data
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