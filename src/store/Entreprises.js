import { computed, ref } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

export const useEntreprisesStore = defineStore('entreprises', {
    state: () => ({
        entreprises : []
    }),

    actions: {
        async getEntreprises() {
            const response = await axios.get('http://127.0.0.1:8000/api/entreprises')
            this.entreprises = response.data
            console.log(this.entreprises)
            return this.entreprises
        },
         async deleteEntreprises(todelete) {
                return new Promise((resolve, reject) => {
                    axios.delete(`http://127.0.0.1:8000/api/entreprises/${todelete}`)
                    resolve(todelete)
                }).then(() => {
                    console.log(todelete)
                    this.entreprises.forEach(element => {
                        console.log(element)
                        if (element.id == todelete){
                            const index = this.entreprises.indexOf(element)
                            this.entreprises.splice(index, 1)
                            console.log(this.entreprises)
                        }
                    });
                }).catch(error => {
                    console.log(error)
                })
        },
        async insertEntreprises(data) {
            try {
                const response = axios.post('http://127.0.0.1:8000/api/entreprises', data)
                console.log('La fonction a reussi et a inserré' , data)
            } catch (error) {
                console.log('L\'insertion n\'a pas fonctionné', error)
            }
        },
        async changeEntreprises(data, id) {
            return new Promise((resolve, reject) => {
                const response = axios.put(`http://127.0.0.1:8000/api/entreprises/${id}`, data)
            })
        }
    }
})