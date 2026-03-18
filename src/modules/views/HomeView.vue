<template>
  <div>
    <!-- Header: escucha el evento y cambia el estado -->
    <TheHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />

    <!-- Sidebar: recibe el estado y escucha cuando se cierra -->
    <TheSidebar :open="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- Main components go here -->

    <!-- Footer goes here -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TheHeader from '../components/TheHeader.vue';
import TheSidebar from '../components/TheSidebar.vue';

const isSidebarOpen = ref(false);
</script>