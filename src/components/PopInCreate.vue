    <template>
            <Teleport to="body">
                    <div class=" flex absolute bg-black/40 w-full h-full top-0 left-0 justify-center items-center hover:cursor-pointer" @click="$emit('closePop')">
                        <div class="relative h-[60vh] w-[55vw] bg-my-white border-2 rounded-2xl hover:cursor-auto" @click.stop>
                            <div class="flex flex-row justify-around h-full content-center items-center">
                                <button class="border-2 border-black h-[25vh] rounded-xl aspect-square bg-primary-color hover:scale-110 duration-300 " @click="GoToPersonneFormulaire">
                                    Personne
                                </button>
                                <button class="border-2 border-black h-[25vh] rounded-xl aspect-square bg-secondary-color hover:scale-110 duration-300" @click="GoToEntrepriseFormulaire">
                                    Entreprise
                                </button>
                            </div>
                            <div v-if="PopinPage !== null">
                                <Transition name="popin" >
                                    <FormCreate v-if="PopinPage === 'entreprises'" :interface="PopinPage" @returnPage="BackToMain"  @finish="GoToFinish"></FormCreate>
                                </Transition>
                                <Transition name="popin" >
                                    <FormCreate v-if="PopinPage === 'personnes'" :interface="PopinPage" @returnPage="BackToMain" @finish="GoToFinish"></FormCreate>
                                </Transition>
                                <div v-if="PopinPage === 'end'">
                                    <img src="/end.gif" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
            </Teleport>
    </template>

<script setup>
import { Teleport, ref, Transition } from 'vue';
import FormCreate from './FormCreate.vue';

const PopinPage = ref(null)

const GoToPersonneFormulaire = () => {
    PopinPage.value = 'personnes'
}

const GoToEntrepriseFormulaire = () => {
    PopinPage.value = 'entreprises'
}

const GoToFinish = () => {
    PopinPage.value = 'end'
}

const BackToMain = () => {
    PopinPage.value = null
}

</script>


<style lang="scss" scoped>

.popin-enter-active,
.popin-leave-active {
  transition: opacity 0.5s ease;
}

.popin-enter-from,
.popin-leave-to {
  opacity: 0;
}

</style>