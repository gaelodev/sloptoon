<template>
  <div class="min-h-screen flex items-center justify-center bg-melondrama-50 px-6">
    <div
      class="w-full max-w-md bg-melondrama-100 rounded-2xl shadow-md p-8 border border-melondrama-200"
    >
      <h1 class="text-3xl font-bold text-melondrama-800 text-center mb-2">Crear cuenta</h1>

      <p class="text-sm text-melondrama-600 text-center mb-6">Únete a Sloptoon</p>

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

        <button
          @click="register"
          class="w-full bg-melondrama-600 hover:bg-melondrama-700 text-white font-medium py-3 rounded-xl active:scale-95 transition cursor-pointer"
        >
          Crear cuenta
        </button>

        <button
          @click="goLogin"
          class="w-full bg-melondrama-200 hover:bg-melondrama-300 text-melondrama-800 font-medium py-3 rounded-xl active:scale-95 transition cursor-pointer"
        >
          Ya tengo cuenta
        </button>

        <p v-if="error" class="text-red-500 text-sm text-center mt-2">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

const router = useRouter();

const email = ref('');
const password = ref('');
const error = ref('');

const register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    error.value = '';
    router.push('/');
  } catch {
    error.value = 'No se pudo crear la cuenta';
  }
};

const goLogin = () => {
  router.push('/login');
};
</script>
