<template>
    <button class="bg-red-600 p-1 rounded-lg border-2 border-black duration-300 hover:scale-110" @click="DeleteData"> Delete </button>
</template>

<script setup>
import axios from 'axios';
import { useEntreprisesStore } from '@/store/Entreprises';
import { usePersonnesStore } from '@/store/Personnes';

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    interface: {
        type: String
    }
})

const personnesStore = usePersonnesStore()
const entreprisesStore = useEntreprisesStore()


const DeleteData = async () => {
    if (props.interface === 'entreprises') {
        const response = await entreprisesStore.deleteEntreprises(props.data.id)
    } else if (props.interface === 'personnes'){
        const response = await personnesStore.deletePersonnes(props.data.id)
    }
}
</script>

<style lang="scss" scoped>
</style>
