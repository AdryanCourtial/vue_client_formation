<template>
    <button class="bg-green-button p-1 rounded-lg border-2 border-black duration-300 hover:scale-110" @click="togglePopIn" > Modifier </button>
    <FormModif v-if="isOpen" @closePop="togglePopIn" :interface="props.interface" :data="props.data" />
</template>

<script setup>
import FormModif from '@/components/FormModif.vue'
import { ref, defineProps } from 'vue';

const props = defineProps({
    data: {
        type: Object
    },
    interface: {
        type: String
    }
})

const isOpen = ref(false)

const togglePopIn = () => {
    isOpen.value = !isOpen.value
    console.log(isOpen.value)
}
</script>

<style lang="scss" scoped>

</style>
