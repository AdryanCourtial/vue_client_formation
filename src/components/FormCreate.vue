<template>
    <div class=" flex absolute bg-black/40 w-full h-full top-0 left-0 justify-center items-center hover:cursor-pointer">
        <div class="relative h-[600px] w-[1000px] bg-my-white border-2 rounded-2xl hover:cursor-auto" @click.stop>
            <div v-if="props.interface === 'personnes'">
                <form :action="PostDataPersonnes" action="/personnes">
                    <div class="flex flex-col gap-3">
                        <div>
                            <p> Nom </p>
                            <input type="text" id="nom" v-model="dataPersonnes.nom">
                        </div>
                        <div>
                            <p> Prenom </p>
                            <input type="text" name="prenom" v-model="dataPersonnes.prenom">
                        </div>
                        <div>
                            <p> Email </p>
                            <input type="email" name="email" v-model="dataPersonnes.email">
                        </div>
                        <div>
                            <p> Téléphone </p>
                            <input type="tel" name="telephone" v-model="dataPersonnes.telephone">
                        </div>
                        <div>
                            <p> Civilité</p>
                            <input type="search" name="civilite" list="civilite-list" v-model="dataPersonnes.civilite">
                            <datalist id="civilite-list">
                                <option v-for="item in CiviliteList" :key="item.id" :value="item.civilite"></option>
                            </datalist>
                        </div>
                        <div>
                            <p> Localisation</p>
                            <input type="search" name="localisation" v-model="dataPersonnes.localisation" list="localisation-list">
                            <datalist id="localisation-list">
                                <option v-for="item in LocalisationList" :key="item.id" :value="item.localisation"></option>
                            </datalist>
                        </div>
                        <input type="submit" >
                    </div>
                </form>
            </div>
            <div v-else-if="props.interface === 'entreprises'">
                <form action="POST">
                    <div class="flex flex-col gap-3">
                        <div>
                            <p> Nom </p>
                            <input type="text" id="nom">
                        </div>
                        <div>
                            <p> Secteur D'activité </p>
                            <input type="text" name="secteur_activite">
                        </div>
                        <div>
                            <p> Code Postal </p>
                            <input type="text" name="code_postal">
                        </div>
                        <div>
                            <p> Ville </p>
                            <input type="text" name="Ville" >
                        </div>
                        <div>
                            <p> Chiffres D'affaires</p>
                            <input type="text" name="chiffres_affaires">
                        </div>
                        <input type="submit" >
                    </div>
                </form>
            </div>
            <div v-else>
                HEUUUU CA MARCHE PAS
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import axios from 'axios';

const dataPersonnes = reactive({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    civilite: '',
    localisation: ''
})

const LocalisationList = ref(null)
const CiviliteList = ref(null)
onMounted(async () => {
    try {
        const data = await axios.get("http://127.0.0.1:8000/api/localisations")
        LocalisationList.value = data.data
        console.log(LocalisationList.value[1].localisation)
    } catch (error) {
        console.log("Petit Soucis ", error)
    }

    try {
        const data = await axios.get("http://127.0.0.1:8000/api/civilites")
        CiviliteList.value = data.data
    } catch (error) {
        console.log("Petit Soucis ", error)
    }
})

const PostDataPersonnes = async () => {
    console.log(dataPersonnes)
    // const data = await axios.post('http://127.0.0.1:8000/api/personnes', dataPersonnes)
}


const props = defineProps({
    interface: {
        type: String
    },
    url: {
        type: String
    }
})

</script>
