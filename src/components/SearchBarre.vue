<template>
    <div class="flex flex-col relative rounded ">
        <input type="text" v-model="searchValue" @input="SearchForValue" class="border-black border-2 h-auto w-auto" >
        <div class="h-10 border-black rounded-lg border-2 flex flex-col">
        </div>
    </div>
</template>

<script setup>
import { ref, Suspense, onMounted } from 'vue'
import { usePersonnesStore } from '@/store/Personnes';
import { storeToRefs } from 'pinia';



</script>
