<template>
  <div>
    <!-- Header: escucha el evento y cambia el estado -->
    <TheHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />

    <!-- Sidebar: recibe el estado y escucha cuando se cierra -->
    <TheSidebar :open="isSidebarOpen" @close="isSidebarOpen = false" />
    <!--Main components go here (sidebar, tale cards, etc)-->
    <TaleView></TaleView>

    <!-- Main components go here -->

    <NewTaleModal class="absolute top-0 left-0"></NewTaleModal>
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

const isSidebarOpen = ref(false);
</script>
