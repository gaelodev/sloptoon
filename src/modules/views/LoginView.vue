<template>
  <div class="min-h-screen flex items-center justify-center bg-melondrama-50 px-6">
    <div class="w-full max-w-md rounded-2xl shadow-md p-8 border border-melondrama-200">
      <!-- Header -->
      <h1 class="text-3xl font-bold text-melondrama-800 text-center mb-2">Bienvenido</h1>

      <p class="text-sm text-melondrama-600 text-center mb-6">Inicia sesión para continuar</p>

      <!-- Inputs -->
      <div class="flex flex-col gap-4">
        <input
          v-model="email"
          type="email"
          placeholder="Correo electrónico"
          class="w-full px-4 py-3 rounded-xl border border-melondrama-300 bg-melondrama-50 text-melondrama-800 focus:outline-none focus:ring-2 focus:ring-melondrama-500"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
          class="w-full px-4 py-3 rounded-xl border border-melondrama-300 bg-melondrama-50 text-melondrama-800 focus:outline-none focus:ring-2 focus:ring-melondrama-500"
        />

        <!-- Login button -->
        <button
          @click="login"
          class="w-full bg-melondrama-600 hover:bg-melondrama-700 text-white font-medium py-3 rounded-xl active:scale-95 transition"
        >
          Entrar
        </button>

        <button
          @click="goToRegister"
          class="w-full bg-melondrama-300 hover:bg-melondrama-400 text-melondrama-900 font-medium py-3 rounded-xl active:scale-95 transition cursor-pointer"
        >
          Crear cuenta
        </button>

        <!-- Divider -->
        <div class="flex items-center gap-3 my-2">
          <div class="h-px bg-melondrama-300 flex-1"></div>
          <span class="text-xs text-melondrama-500">o</span>
          <div class="h-px bg-melondrama-300 flex-1"></div>
        </div>

        <!-- Google button -->
        <button
          @click="loginWithGoogle"
          class="w-full bg-melondrama-200 hover:bg-melondrama-300 text-melondrama-800 font-medium py-3 rounded-xl active:scale-95 transition cursor-pointer"
        >
          Continuar con Google
        </button>

        <!-- Error -->
        <p v-if="error" class="text-red-500 text-sm text-center mt-2">
          {{ error }}
        </p>
      </div>

      <!-- Footer -->
      <p class="text-xs text-melondrama-500 text-center mt-6">Sloptoon · Acceso seguro</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/firebase';

const router = useRouter();

const email = ref('');
const password = ref('');
const error = ref('');

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    error.value = '';
    router.push('/');
  } catch {
    error.value = 'Credenciales incorrectas';
  }
};

const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    router.push('/');
  } catch {
    error.value = 'Error al iniciar sesión con Google';
  }
};

const goToRegister = () => {
  router.push('/register');
};
</script>
