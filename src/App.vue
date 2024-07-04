
<template>
  <div class="body flex flex-col min-h-lvh" id="body">
    <Navbarre/>
    <RouterView class="flex-1" v-slot="{ Component }" >
        <transition name="route" mode="out-in">
          <component :is="Component"> </component>
        </transition>
      </RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbarre from './components/NavBarre.vue'
import { Transition } from 'vue';



</script>

<style scoped>
.route-enter-from {
  transform: translateX(-100vw);
}

.route-enter-active,
.route-leave-active {
  transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: black;
}

.route-leave-to {
  transform: translateX(100vw);
}

.body {
  cursor: auto;
}

* {
  cursor: url(frame1.png), auto;
  -webkit-animation: cursor 400ms infinite;
  animation: cursor 400ms infinite;
}

@-webkit-keyframes cursor {
  0% {cursor: url(frame1.png), auto;}
  20% {cursor: url(frame2.png), auto;}
  40% {cursor: url(frame3.png), auto;}
  60% {cursor: url(frame4.png), auto;}
  80% {cursor: url(frame5.png), auto;}
  100% {cursor: url(frame6.png), auto;}
}

@keyframes cursor {
  0% {cursor: url(frame1.png), auto;}
  20% {cursor: url(frame2.png), auto;}
  40% {cursor: url(frame3.png), auto;}
  60% {cursor: url(frame4.png), auto;}
  80% {cursor: url(frame5.png), auto;}
  100% {cursor: url(frame6.png), auto;}
}
</style>
