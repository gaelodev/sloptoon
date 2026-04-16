<template>
  <header
    class="w-full bg-melondrama-500 text-white px-6 flex items-center justify-between shadow-sm"
  >
    <!-- Logo y menú de navegación -->
    <div class="flex items-center gap-3">
      <!-- Icono del Slidebar -->
      <button
        class="focus:outline-none hover:text-yellow-400 transition-colors"
        @click="toggleSidebar"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <!-- Logo / Título -->
      <RouterLink to="/">
        <h1 class="text-3xl font-bold tracking-wide">Sloptoon</h1>
      </RouterLink>
    </div>

    <!-- Usuario -->
    <!--<div class="flex items-center gap-3">
      <span class="text-sm text-gray-300">Usuario</span>
      <div
        class="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-bold text-sm"
      >
        U
      </div>
    </div>-->
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const emit = defineEmits(['toggle-sidebar']);

const toggleSidebar = () => {
  emit('toggle-sidebar');
};
</script>

<style scoped></style>
