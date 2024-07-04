<template>
    <div :style="[dynamicStyles]">
        <img src="/Loading.svg" alt="Chargement du Composant" class="animate-spin">
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: '#fffff'
    },
    height: {
        type: String
    },
    width: {
        type: String
    }

})

const dynamicStyles = computed(() => ({
    backgroundColor: props.color,
    height: props.height,
    width: props.width
    }));



</script>
