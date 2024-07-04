<template>
        <div v-if="props.interface === 'personnes'" class="flex flex-row w-[45vw] h-[7vh] border-1 rounded-full bg-my-white drop-shadow-result-annuaire pl-4 items-center text-center mr-2 hover:bg-primary-color duration-300 cursor-pointer">
            <h1 class="font-bold flex-1"> {{ props.data.nom }} </h1>
            <h1 class="font-bold flex-1"> {{ props.data.prenom }} </h1>
            <h1 class="font-bold text-center flex-1"> {{ props.data.civilite.civilite }} </h1>
        </div>
        <div v-else class="flex flex-row w-[45vw] h-[7vh] border-1 rounded-full bg-my-white drop-shadow-result-annuaire pl-4 items-center text-center mr-2 hover:bg-secondary-color duration-300 cursor-pointer">
            <h1 class="font-bold flex-1"> {{ props.data.nom }} </h1>
            <h1  class="font-bold flex-1"> {{ props.data.code_postal }} </h1>
            <h1 class="font-bold text-center flex-1"> {{ props.data.chiffres_affaires }} K</h1>
        </div>
</template>

<script setup>
import { defineProps } from 'vue';
import VWave from 'v-wave';
const props = defineProps({
    data : {
        type: Object,
    },
    interface: {
        type: String
    }
})

</script>

<style lang="scss" scoped>

</style>