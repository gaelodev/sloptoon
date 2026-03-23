<template>
  <!-- Contenedor de la barra lateral -->
  <aside
    :class="[
      open
        ? 'w-64 py-8 bg-melondrama-100 shadow-md transform transition-transform duration-300'
        : 'hidden ',
    ]"
  >
    <!-- Botón de cerrar -->
    <!--
      <div class="flex justify-end p-4">
        <button @click="$emit('close')" class="text-gray-600 hover:text-gray-900">✕</button>
      </div>
     -->

    <!-- Opciones de navegación -->
    <nav class="flex flex-col gap-8 px-6 h-full">
      <button
        @click="$emit('newTaleButtonClicked')"
        class="bg-melondrama-600 h-12 text-greymelon-100 text-lg font-semibold rounded-md shadow-sm hover:bg-melondrama-700 transition"
      >
        Nueva historia
      </button>

      <div class="flex flex-col gap-4 flex-1 font-semibold text-melondrama-700">
        <a href="#" class="hover:text-melondrama-900 transition">Inicio</a>
        <a href="#" class="hover:text-melondrama-900 transition">Mis historias</a>
        <a href="#" class="hover:text-melondrama-900 transition">Configuración</a>
      </div>

      <a href="#" class="text-melondrama-700 hover:text-melondrama-900 transition">Cerrar sesión</a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
interface Props {
  open: boolean;
}

defineProps<Props>();

const emit = defineEmits(['close', 'newTaleButtonClicked']);

const toggleSidebar = () => {
  emit('close');
};
</script>

<style scoped></style>
