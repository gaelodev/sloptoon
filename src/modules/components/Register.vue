<template>
  <div>
    <h2>Registro</h2>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="register">Crear cuenta</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const email = ref('');
const password = ref('');

const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);

    console.log('Usuario creado:', userCredential.user);
  } catch (error) {
    console.error('Error al registrar:', error.message);
  }
};
</script>
