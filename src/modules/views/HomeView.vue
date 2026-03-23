<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header: escucha el evento y cambia el estado -->
    <TheHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" class="h-20" />

    <section class="flex flex-row flex-1">
      <!-- Sidebar: recibe el estado y escucha cuando se cierra -->
      <TheSidebar
        @new-tale-button-clicked="isModalOpen = true"
        :open="isSidebarOpen"
        @close="isSidebarOpen = false"
        class="self-stretch"
      />

      <!-- Main components go here -->
      <div class="flex flex-col mx-12">
        <h1 class="text-3xl font-bold text-greymelon-900 my-8">¡Hola de nuevo!</h1>
        <h2 class="text-2xl font-medium my-8 text-greymelon-700">Tus historias recientes</h2>
      </div>
    </section>
    <NewTaleModal
      :open="true"
      :class="[isModalOpen ? 'absolute top-0 left-0' : 'hidden']"
      @modal-closed="isModalOpen = false"
    ></NewTaleModal>
    <!--absolute top-0 left-0 | hidden-->

    <!-- Footer goes here -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TheHeader from '../components/TheHeader.vue';
import TheSidebar from '../components/TheSidebar.vue';
import NewTaleModal from '../components/NewTaleModal.vue';
import TaleView from './TaleView.vue';

const isSidebarOpen = ref(true);

const isModalOpen = ref(false);
</script>
