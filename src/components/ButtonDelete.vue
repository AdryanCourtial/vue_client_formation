<template>
    <button class="bg-red-600 p-1 rounded-lg border-2 border-black" @click="DeleteData"> Delete </button>
</template>

<script setup>
import axios from 'axios';

const props = defineProps({
    data: {
        type: Object
    },
    interface: {
        type: String
    }
})

const DeleteData = async () => {
    try {
        const data = await axios.delete(`http://127.0.0.1:8000/api/${props.interface}/${props.data.id}`)
    } catch (error) {
        console.log('Le delete na pas fonctionnais', error)
    }
}
</script>

<style lang="scss" scoped>
</style>
