<template>
    <div class=" flex absolute bg-black/40 w-full h-full top-0 left-0 justify-center items-center hover:cursor-pointer">
        <div class="relative h-[600px] w-[1000px] bg-my-white border-2 rounded-2xl hover:cursor-auto" @click.stop>
            <button class="m-2 bg-black p-1 rounded-lg text-white" @click="$emit('returnPage')"> Retour </button>
            <div v-if="props.interface === 'personnes'" class="h-full w-full">
                <form action="http://127.0.0.1:8000/api/personnes" method="post" class="h-fit w-fit m-auto mt-10">
                    <div class="grid grid-cols-2 grid-rows-6 gap-6 [&>*>input]:w-full [&>*>input]:h-8 [&>*>input]:rounded-lg [&>*>input]:drop-shadow-lg [&>*>input]:p-4">
                        <div class="">
                            <p> Nom </p>
                            <input type="text" name="nom" v-model="dataPersonnes.nom" class="w-full">
                        </div>
                        <div>
                            <p> Prenom </p>
                            <input type="text" name="prenom" v-model="dataPersonnes.prenom">
                        </div>
                        <div class="col-span-2">
                            <p> Email </p>
                            <input type="email" name="email" v-model="dataPersonnes.email">
                        </div>
                        <div class="col-span-2">
                            <p> Téléphone </p>
                            <input type="tel" name="telephone" v-model="dataPersonnes.telephone">
                        </div>
                        <div class="col-span-2">
                            <p> Civilité </p>
                            <input type="search" name="civilite" list="civilite-list" v-model="dataPersonnes.civilite">
                            <datalist id="civilite-list">
                                <option v-for="item in CiviliteList" :key="item.id" :value="item.civilite"></option>
                            </datalist>
                        </div>
                        <div class="col-span-2">
                            <p> Localisation </p>
                            <input type="search" name="localisation" v-model="dataPersonnes.localisation" list="localisation-list">
                            <datalist id="localisation-list">
                                <option v-for="item in LocalisationList" :key="item.id" :value="item.localisation"></option>
                            </datalist>
                        </div>
                        <input type="submit" value="Créer une Personnes" class="col-span-2 bg-green-button border-2 border-black rounded-xl cursor-pointer">
                    </div>
                </form>
            </div>
            <div v-else-if="props.interface === 'entreprises'">
                <form action="http://127.0.0.1:8000/api/entreprises" method="post" class="h-fit w-fit m-auto mt-12">
                    <div class="grid grid-rows-5 gap-6 grid-cols-2 [&>*>input]:w-full [&>*>input]:h-8 [&>*>input]:rounded-lg [&>*>input]:drop-shadow-lg [&>*>input]:p-4">
                        <div class="col-span-2">
                            <p> Nom </p>
                            <input type="text" name="nom" v-model="dataEntreprises.nom">
                        </div>
                        <div class="col-span-2">
                            <p> Secteur D'activité </p>
                            <input type="search" name="secteur_activite" list="secteur_activite-list" v-model="dataEntreprises.secteur_activite">
                            <datalist id="secteur_activite-list">
                                <option v-for="item in SecteurActiviteList" :key="item.id" :value="item.secteur_activite"></option>
                            </datalist>
                        </div>
                        <div>
                            <p> Code Postal </p>
                            <input type="text" name="code_postal" v-model="dataEntreprises.code_postal">
                        </div>
                        <div>
                            <p> Ville </p>
                            <input type="text" name="ville" v-model="dataEntreprises.ville">
                        </div>
                        <div class="col-span-2">
                            <p> Chiffres D'affaires</p>
                            <input type="text" name="chiffres_affaires" v-model="dataEntreprises.chiffres_affaires">
                        </div>
                        <input class="col-span-2 bg-green-button rounded-xl border-black border-2 cursor-pointer" type="submit" value="Créer une Entreprises">
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

const dataEntreprises = reactive({
    nom: '',
    secteur_activite: '',
    code_postal: '',
    ville: '',
    chiffres_affaires: ''
})

const LocalisationList = ref(null)
const CiviliteList = ref(null)
const SecteurActiviteList = ref(null)
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

    try {
        const data = await axios.get("http://127.0.0.1:8000/api/secteurs_activites")
        SecteurActiviteList.value = data.data
    } catch (error) {
        console.log("Petit Soucis ", error)
    }
})

// const PostDataPersonnes = async () => {
//     console.log(dataPersonnes)
//     const data = await axios.post('http://127.0.0.1:8000/api/personnes', dataPersonnes)
// }


const props = defineProps({
    interface: {
        type: String
    },
    url: {
        type: String
    }
})

</script>
