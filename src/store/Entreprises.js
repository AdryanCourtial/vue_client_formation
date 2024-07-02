import { computed, reactive } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

export const useEntreprisesStore = defineStore('entreprises', () => {
    const entreprises = reactive([])

    const getEntreprises = computed( async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/entreprises')
        entreprises = response.data
        console.log(entreprises)
    })
    return {
        entreprises,
        getEntreprises
    }
})