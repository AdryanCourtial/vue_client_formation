<template>
    <div class="flex flex-col gap-4 items-center relative aspect-square h-[18vw] rounded-md border-[1vh] border-black" :style="{ backgroundColor: props.color}">
        <!-- <div class="flex "> -->
            <RouterLink :to='props.href' class="content-center h-full w-full overflow-hidden text-my-white">
                <div class="flex flex-col items-center">
                    <img :src="getImageUrl()"  alt="Je suis Une Image" class="aspect-square h-1/2" />
                </div>
            </RouterLink>
            <p class="text-black text-2xl" >{{ props.data.length }} {{ props.description }}</p>
        <!-- </div> -->
</div>
</template>

<script setup>

const props = defineProps({
    color: String,
    image: String,
    description: String,
    href: String,
    data: Array
})

function getImageUrl() {
  return new URL(`/src/assets/${props.image}`, import.meta.url)
}
</script>

<style lang="scss" scoped>

</style>