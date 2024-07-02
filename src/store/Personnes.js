import { computed, reactive } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

export const usePersonnesStore = defineStore('personnes', () => {
    const personnes = reactive([])

    const getPersonnes = computed( async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/personnes')
        personnes = response.data
        console.log(personnes)
    })

    const deletePersonnes = computed(( id ) => {
        // utiliser la fonction Splice
    })
    return {
        personnes,
        getPersonnes
    }
})