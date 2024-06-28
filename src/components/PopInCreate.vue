    <template>
        <Teleport to="body">
                <div class=" flex absolute bg-black/40 w-full h-full top-0 left-0 justify-center items-center hover:cursor-pointer" @click="$emit('closePop')">
                    <div class="relative h-[600px] w-[1000px] bg-my-white border-2 rounded-2xl hover:cursor-auto" @click.stop>
                        <div class="flex flex-row justify-around h-full content-center items-center">
                            <button class="border-2 border-black h-[25vh] rounded-xl aspect-square" @click="GoToPersonneFormulaire">
                                personnes
                            </button>
                            <button class="border-2 border-black h-[25vh] rounded-xl aspect-square" @click="GoToEntrepriseFormulaire">
                            </button>
                        </div>
                        <div v-if="PopinPage !== null">
                            <FormCreate v-if="PopinPage === 'entreprises'" :interface="PopinPage" :url="'s'" />
                            <FormCreate v-if="PopinPage === 'personnes'" :interface="PopinPage" :url="'s'"/>
                        </div>
                    </div>
                </div>
        </Teleport>
    </template>

<script setup>
import { Teleport, ref } from 'vue';
import FormCreate from './FormCreate.vue';

const PopinPage = ref(null)

const GoToPersonneFormulaire = () => {
    PopinPage.value = 'personnes'
}

const GoToEntrepriseFormulaire = () => {
    PopinPage.value = 'entreprises'
}


</script>


<style lang="scss" scoped>


</style>