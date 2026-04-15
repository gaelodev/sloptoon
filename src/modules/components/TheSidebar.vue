<template>
  <!-- Contenedor de la barra lateral -->
  <aside
    :class="[
      open
        ? 'w-64 py-8 bg-melondrama-100 shadow-md transform transition-transform duration-300'
        : 'hidden',
    ]"
  >
    <nav class="flex flex-col gap-8 px-6 h-full">
      <!-- Botón nueva historia -->
      <button
        @click="$emit('newTaleButtonClicked')"
        class="bg-melondrama-600 h-12 text-greymelon-100 text-lg font-semibold rounded-md shadow-sm hover:bg-melondrama-700 transition"
      >
        Nueva historia
      </button>

      <!-- Navegación -->
      <div class="flex flex-col gap-4 flex-1 font-semibold text-melondrama-700">
        <a href="#" class="hover:text-melondrama-900 transition">Inicio</a>
        <a href="#" class="hover:text-melondrama-900 transition">Mis historias</a>
        <a href="#" class="hover:text-melondrama-900 transition">Configuración</a>
      </div>

      <!-- Logout -->
      <button
        @click="logout"
        class="text-melondrama-700 hover:text-melondrama-900 cursor-pointer text-left active:scale-95 active:translate-y-0.5 active:opacity-80 transition-transform duration-100"
      >
        Cerrar sesión
      </button>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { auth } from '@/firebase';

interface Props {
  open: boolean;
}

defineProps<Props>();

const emit = defineEmits(['close', 'newTaleButtonClicked']);

const router = useRouter();

const logout = async () => {
  try {
    await signOut(auth);

    // opcional: cerrar sidebar si está abierta
    emit('close');

    // redirigir a login
    router.push('/login');
  } catch (err) {
    console.log('Error al cerrar sesión:', err);
  }
};
</script>

<style scoped></style>
