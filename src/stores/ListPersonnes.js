import axios from "axios";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useListPersonnesStore = defineStore('personnesList', {
    state: () => {
        return {
            listPersonnes : [],
            name: 'eessaie'
        }
    },
    actions: {
        async getPersonnes() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/personnes');
                this.listPersonnes = response.data
                console.log(this.listPersonnes)
            } catch (error){
                return error
            }
        }
    }

})