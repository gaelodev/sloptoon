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

      <RouterView></RouterView>
    </section>

    <NewTaleModal
      v-if="isModalOpen"
      :open="true"
      class="absolute top-0 left-0"
      @modal-closed="isModalOpen = false"
    ></NewTaleModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TheHeader from '../components/TheHeader.vue';
import TheSidebar from '../components/TheSidebar.vue';
import NewTaleModal from '../components/NewTaleModal.vue';

const isSidebarOpen = ref(true);

const isModalOpen = ref(false);
</script>
