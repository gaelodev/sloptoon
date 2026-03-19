<template>
      <!-- Contenedor de la barra lateral -->
      
  <aside
     class="bg-gray-100 shadow-lg transition-all duration-300 overflow-hidden flex-shrink-0"
  :class="{ 'w-0': !sidebar.isOpen, 'w-64': sidebar.isOpen }"
  >
  <div class="w-64 whitespace-nowrap">
    <!-- Texto del encabezado -->
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-800">Menú</h2>
    </div>

    <!-- Opciones de navegación -->
    <nav class="flex flex-col gap-4 px-6">
      
      <!-- Botón para crear una nueva historia -->
      <NewTaleButton />

      <a href="#" class="text-gray-800 hover:text-yellow-500 transition">Inicio</a>
      <a href="#" class="text-gray-800 hover:text-yellow-500 transition">Mis historias</a>
      <a href="#" class="text-gray-800 hover:text-yellow-500 transition">Configuración</a>
    </nav>
    <!-- Enlace inferior -->
    <div class="p-6">
      <a href="#" class="text-gray-600 Ahover:text-yellow-500 transition">Cerrar sesión</a>
    </div>
  </div>
    
  </aside>


</template>

<script setup lang="ts">
  import NewTaleButton from './NewTaleButton.vue';
  import { useSidebarStore } from '../stores/SideBarStore';

  const sidebar = useSidebarStore();
</script>

<style scoped></style>
