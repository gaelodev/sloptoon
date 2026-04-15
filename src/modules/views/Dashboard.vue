<template>
  <div class="dashboard">
    <h1>Dashboard</h1>

    <p v-if="user">Bienvenido, {{ user.email }}</p>

    <p v-else>No hay usuario cargado</p>

    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { signOut } from 'firebase/auth';
  import { auth } from '@/firebase';
  import { user } from '@/authState';

  const logout = async () => {
    await signOut(auth);
  };
</script>

<style scoped>
  .dashboard {
    padding: 20px;
  }
</style>
