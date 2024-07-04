<template>
    <div class="flex flex-col h-auto w-auto">
        <div class="flex flex-row">
            <input type="text" class="border-1 rounded-full w-[25vw] h-10 mb-12 drop-shadow-result-annuaire text-center"
            @input="getSearchResults"
            v-model="SearchQuery"
            placeholder="Veuillez rentrer un nom"
            >
            <img src="/curseur.gif" alt="" class="h-10 w-10" >
        </input>

        </div>
            <div class="flex flex-col justify-start w-fit h-[70vh] gap-2 overflow-y-auto overflow-hidde">
                <div v-for="prop in list" :key="prop.id">
                    <button  @click="$emit('get_prop', prop)">
                        <ResultAnnuairePersonnes :data="prop" :interface="props.interface"/>
                    </button>
                </div>
            </div>
    </div>

</template>

<script setup>
import ResultAnnuairePersonnes from './ResultAnnuairePersonnes.vue'
import { ref, onMounted, watch } from 'vue';
import VWave from 'v-wave';

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