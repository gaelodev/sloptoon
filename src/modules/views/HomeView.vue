<template>
  <div class="flex flex-col mx-12 w-full">
    <h1 class="text-3xl font-bold text-greymelon-900 my-8">¡Hola de nuevo!</h1>
    <h2 class="text-2xl font-medium my-8 text-greymelon-700">Tus historias recientes</h2>
    <section class="flex flex-row flex-wrap gap-8 w-full">
      <TaleCard
        title="Ejemplo"
        summarize="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a dolorem tempore ea quasi quod architecto quis, rerum labore vero exercitationem sed natus atque fugiat qui dignissimos sit eos nesciunt?"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TheHeader from '../components/TheHeader.vue';
import TheSidebar from '../components/TheSidebar.vue';
import NewTaleModal from '../components/NewTaleModal.vue';
import TaleCard from '../components/TaleCard.vue';

const isSidebarOpen = ref(true);

const isModalOpen = ref(false);
</script>
