<template>
    <button class="bg-red-600 p-1 rounded-lg border-2 border-black duration-300 hover:scale-110" @click="DeleteData"> Delete </button>
    <Toaster rich-colors position="top-right" />
</template>

<script setup>
import axios from 'axios';
import { useEntreprisesStore } from '@/store/Entreprises';
import { usePersonnesStore } from '@/store/Personnes';
import { Toaster, toast } from 'vue-sonner';

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
        toast.success('L\'entreprise à bien été supprimé')
    } else if (props.interface === 'personnes'){
        const response = await personnesStore.deletePersonnes(props.data.id)
        toast.success('La personne à bien été supprimé')
    }
}
</script>

<style lang="scss" scoped>
</style>
