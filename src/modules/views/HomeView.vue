<template>
  <div class="flex flex-col h-screen">
    <!-- Header: escucha el evento y cambia el estado -->
    <TheHeader />

    <!-- Sidebar: recibe el estado y escucha cuando se cierra -->
    <TheSidebar />

    <!-- Main components go here -->
    <main class="flex-1 overflow-auto p-6 transition-all duration-300">
        
    </main>
    <!-- Footer goes here -->
  </div>
</template>

<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import TheSidebar from '../components/TheSidebar.vue';
</script>