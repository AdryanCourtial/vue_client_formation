<template>
        <div class="flex flex-row w-[840px] h-[65px] border-1 rounded-full bg-my-white drop-shadow-result-annuaire pl-4 items-center text-center mr-2">
            <h1 class="font-bold flex-1"> {{ props.nom }} </h1>

            <h1 v-if="props.prenom" class="font-bold flex-1"> {{ props.prenom }} </h1>
            <h1 v-else class="font-bold flex-1"> {{ props.code_postal }} </h1>

            <h1 v-if="props.civilite" class="font-bold text-center flex-1"> {{ props.civilite.civilite }} </h1>
            <h1 v-else class="font-bold text-center flex-1"> {{ props.chiffres_affaires }} K</h1>
        </div>
</template>

<script setup>
defineProps({
    props : {
        type: Object,
    }
})
</script>

<style lang="scss" scoped>

</style>