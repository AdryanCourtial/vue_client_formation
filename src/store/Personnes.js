import { computed, ref } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

export const usePersonnesStore = defineStore('personnes', {
    state: () => ({
        personnes : []
    }),

    actions: {
        async getPersonnes() {
            const response = await axios.get('http://127.0.0.1:8000/api/personnes')
            this.personnes = response.data
            console.log(this.personnes)
            return this.personnes
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
    }


})