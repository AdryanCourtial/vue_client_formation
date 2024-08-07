import { computed, ref } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

export const usePersonnesStore = defineStore('personnes', {
    state: () => ({
        personnes : []
    }),

    actions: {
        async getPersonnes(filter = null) {
            switch (filter) {
                case null:
                    const response = await axios.get('http://127.0.0.1:8000/api/personnes')
                    this.personnes = response.data
                    return this.personnes
            }
        },
         async deletePersonnes(todelete) {
                return new Promise((resolve, reject) => {
                    axios.delete(`http://127.0.0.1:8000/api/personnes/${todelete}`)
                    resolve(todelete)
                }).then(() => {
                    console.log(todelete)
                    this.personnes.forEach(element => {
                        console.log(element)
                        if (element.id == todelete){
                            const index = this.personnes.indexOf(element)
                            this.personnes.splice(index, 1)
                            console.log(this.personnes)
                        }
                    });
                }).catch(error => {
                    console.log(error)
                })
        },
        async insertPersonnes(data) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/personnes', data)
                console.log('La fonction a reussi et a inserré' , data)
                return response
            } catch (error) {
                console.log('L\'insertion n\'a pas fonctionné', error)
                return response
            }
        },
        async changePersonnes(data, id) {
            return new Promise((resolve, reject) => {
                console.log(data, id)
                console.log(this.personnes)
                const response = axios.put(`http://127.0.0.1:8000/api/personnes/${id}`, data)
                resolve(data, id)
            }).then(() => {
                this.personnes.forEach(element => {
                    console.log(element)
                    if (element.id === id) {
                        element.nom = data.nom
                        element.prenom = data.prenom
                        element.email = data.email
                        element.telephone = data.telephone
                        element.civilite_id = data.civilite_id
                        element.localisation_id = data.localisation_id
                    }
                });
            }).catch(error => {
                console.log(error)
            })
        }
    }


})