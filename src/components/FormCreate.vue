<template>
    <div class=" flex absolute bg-black/40 w-full h-full top-0 left-0 justify-center items-center hover:cursor-pointer">
        <div class="flex flex-col relative h-[60vh] w-[55vw] bg-my-white border-2 rounded-2xl hover:cursor-auto" @click.stop>
            <button class="m-2 bg-black p-1 w-[4vw] rounded-lg text-white" @click="$emit('returnPage')"> Retour </button>
            <div v-if="props.interface === 'personnes'" class="h-full w-full">
                <div class="h-fit w-fit m-auto">
                    <div class="grid grid-cols-2 grid-rows-6 gap-[] [&>*>input]:w-full [&>*>input]:h-8 [&>*>input]:rounded-lg [&>*>input]:drop-shadow-lg [&>*>input]:p-4">
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
                            <select name="civilite" id="civilite" class="w-full h-8 rounded-lg drop-shadow-lg" v-model="dataPersonnes.civilite_id" >
                                <option v-for="item in CiviliteList" :key="item.id" :value=item.id> {{ item.civilite }} </option>
                            </select>
                        </div>
                        <div class="col-span-2">
                            <p> Localisation </p>
                            <select name="localisation" id="localisation" class="w-full h-8 rounded-lg drop-shadow-lg" v-model="dataPersonnes.localisation_id" >
                                <option v-for="item in LocalisationList" :key="item.id" :value=item.id> {{ item.localisation }} </option>
                            </select>
                        </div>
                        <input @click="postData('personnes')" type="submit" value="Créer une Personnes" class=" hover:scale-110 duration-300 col-span-2 bg-green-button border-2 border-black rounded-xl cursor-pointer">
                    </div>
                </div>
                <div v-if="isFinish" class="flex flex-col justify-center">
                    <img src="/end.gif" alt="" class="w-32 h-32">
                    <p> Vôtre personne à été enregistrer avec succès </p>
                </div>
            </div>
            <div v-else-if="props.interface === 'entreprises'">
                <div class="h-fit w-fit m-auto">
                    <div class="grid grid-rows-5 gap-6 grid-cols-2 [&>*>input]:w-full [&>*>input]:h-8 [&>*>input]:rounded-lg [&>*>input]:drop-shadow-lg [&>*>input]:p-4">
                        <div class="col-span-2">
                            <p> Nom </p>
                            <input type="text" name="nom" v-model="dataEntreprises.nom">
                        </div>
                        <div class="col-span-2">
                            <p> Secteur D'activité </p>
                            <select name="secteur_activite" id="secteur_activite" class="w-full h-8 rounded-lg drop-shadow-lg" v-model="dataEntreprises.secteur_activite_id" >
                                <option v-for="item in SecteurActiviteList" :key="item.id" :value=item.id> {{ item.secteur_activite }} </option>
                            </select>
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
                        <input @click="postData('entreprises')" class="hover:scale-110 duration-300 col-span-2 bg-green-button rounded-xl border-black border-2 cursor-pointer" type="submit" value="Créer une Entreprises">
                    </div>
                </div>
                <div v-if="isFinish" class="flex flex-col justify-center">
                    <img src="/end.gif" alt="aspect-square h-12" class="w-32 h-32">
                    <p> Vôtre entreprise à été enregistrer avec succès </p>
                </div>
            </div>
    </div>
</div>
</template>

<script setup>
import { reactive, ref, onMounted, defineEmits } from 'vue';
import axios from 'axios';
import { usePersonnesStore } from '@/store/Personnes';
import { useEntreprisesStore } from '@/store/Entreprises';

const props = defineProps({
    interface: {
        type: String
    },
    url: {
        type: String
    }
})

const emit = defineEmits(['finish'])

let dataPersonnes = reactive({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    civilite_id: null,
    localisation_id: null
})

let dataEntreprises = reactive({
    nom: '',
    secteur_activite_id: 0,
    code_postal: '',
    ville: '',
    chiffres_affaires: ''
})



const personnesStore = usePersonnesStore()
const entreprisesStore = useEntreprisesStore()
const LocalisationList = ref(null)
const CiviliteList = ref(null)
const SecteurActiviteList = ref(null)
const isFinish = ref(false)

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


const postData = async (param) => {
    let response = null
    if (param === 'entreprises'){
        response = await entreprisesStore.insertEntreprises(dataEntreprises)
        console.log(response)

    } else if (param === 'personnes') {
        response = await personnesStore.insertPersonnes(dataPersonnes)
        console.log(response)
    }

    if (response !== null && response.status == 200) {
        isFinish.value = true
    } else {
        alert("Erreur dans le Formulaire")
    }

    dataPersonnes.nom = ''
    dataPersonnes.prenom = ''
    dataPersonnes.email = ''
    dataPersonnes.telephone = ''
    dataPersonnes.civilite_id = 0
    dataPersonnes.localisation_id = 0
}


</script>
