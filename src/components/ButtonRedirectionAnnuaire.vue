<template>
    <div class="flex flex-col gap-4 items-center">
        <div class="flex relative aspect-square w-[360px] rounded-[95px] border-[4px] border-black" :style="{ backgroundColor: props.color }">
            <RouterLink :to='props.href' class="content-center h-full w-full overflow-hidden text-my-white">
                <div class="flex flex-col items-center">
                    <img :src="getImageUrl()"  alt="Je suis Une Iage" class="aspect-square h-64" />
                    <p class="text-black text-2xl">{{ props.description }}</p>
                </div>
            </RouterLink>
        </div>
</div>
</template>

<script setup>
const props = defineProps({
    color: String,
    image: String,
    description: String,
    href: String,
})

function getImageUrl() {
  return new URL(`/src/assets/${props.image}`, import.meta.url)
}
</script>

<style lang="scss" scoped>

</style>