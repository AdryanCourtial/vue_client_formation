<template>
    <div class="bg-white flex-1 ml-12 mr-12 border-1 rounded-3xl p-8 drop-shadow-result-annuaire">
            <Suspense>
        <div v-if="props.data && props.interface === 'personnes'"class="flex flex-col gap-12">
            <div class="flex flex-row gap-2 justify-center text-3xl font-bold">
                <p class="text-black uppercase"> {{ props.data.nom }} </p>
                <p class="text-black"> {{ props.data.prenom }} </p>
            </div>
            <div class="flex flex-row justify-around text-lg mt-6">
                <p> Sexe : <span class="italic"> {{  props.data.civilite.civilite }}</span></p>
                <p> Téléphone : <span class="italic">{{  props.data.telephone }}</span></p>
            </div>
            <div class="flex flex-row justify-around text-lg">
                <p> Email : <span class="italic">{{  props.data.email }}</span></p>
                <p> Localisation : <span class="italic">{{  props.data.localisation.localisation }}</span></p>
            </div>
            <div class="flex flex-row italic gap-6 text-lg justify-center mt-8">
                <p> Entreprise :</p>
                <p v-if="props.data.entreprise"> {{ props.data.entreprise.nom }}</p>
                <p v-else> Cette Personnes n'a pas d'entreprise liée </p>
            </div>
        </div>
        <div v-else-if="props.data && props.interface === 'entreprises'" class="flex flex-col gap-12">
            <div class="flex flex-row justify-center">
                <p class="text-3xl font-bold"> {{ props.data.nom }}</p>
            </div>
            <div class="flex flex-row justify-around text-lg mt-6">
                <p> Code Postal : <span class="italic"> {{ props.data.code_postal }} </span></p>
                <p> Secteur d'activite : <span class="italic"> {{ props.data.secteur_activite.secteur_activite }} </span></p>
            </div>
            <div class="flex flex-row justify-around text-lg">
                <p> Ville : <span class="italic"> {{ props.data.ville }} </span></p>
                <p> Chiffres d'affaires : <span class="italic"> {{ props.data.chiffres_affaires }} K € </span></p>
            </div>
            <div class="flex flex-col items-center gap-4">
                <p class="text-lg self-start"> Personne(s) :</p>
                <div class="flex flex-col border-2 border-black w-[20vw] h-[25vh] p-2 rounded-xl gap-2 overflow-auto">
                    <p class="" v-for="personne in props.data.personnes" :key="item"> - {{ personne.nom }} {{ personne.prenom }}</p>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-col gap2">
        </div>

        <template #fallback>
            OnLoading
        </template>
    </Suspense>
    </div>
</template>

<script setup>
import { Suspense } from 'vue';
const props = defineProps({
    data: {
        type: Object
    },
    interface: {
        type: String
    }
})
</script>

<style lang="scss" scoped>

</style>