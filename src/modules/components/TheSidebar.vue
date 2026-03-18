<template>
      <!-- Contenedor de la barra lateral -->
  <aside
    class="fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform duration-300"
    :class="{ '-translate-x-full': !open, 'translate-x-0': open }"
  >
    <!-- Botón de cerrar -->
    <div class="flex justify-end p-4">
      <button @click="$emit('close')" class="text-gray-600 hover:text-gray-900">
        ✕
      </button>
    </div>

    <!-- Opciones de navegación -->
    <nav class="flex flex-col gap-4 px-6">
      <button class="bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition">
        + Nueva historia
      </button>

      <a href="#" class="text-gray-800 hover:text-yellow-500 transition">Inicio</a>
      <a href="#" class="text-gray-800 hover:text-yellow-500 transition">Mis historias</a>
      <a href="#" class="text-gray-800 hover:text-yellow-500 transition">Configuración</a>
    </nav>
    <!-- Enlace inferior -->
    <div class="p-6">
      <a href="#" class="text-gray-600 hover:text-yellow-500 transition">Cerrar sesión</a>
    </div>
  </aside>


</template>

<script setup lang="ts">
interface Props {
  open: boolean;
}

defineProps<Props>();

const emit = defineEmits(['close']);

const toggleSidebar = () => {
    emit('close');
}
</script>

<style scoped></style>
