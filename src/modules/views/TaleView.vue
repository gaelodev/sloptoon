<template>
  <!--Ts component is for da view of a single tale (to read it)-->

  <div>
    <h1>Generador de historias</h1>

    <button @click="crearHistoria">Generar historia</button>

    <p v-if="cargando">Generando...</p>

    <p v-if="historia">
      {{ historia }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { generarHistoria } from '@/services/openai';

const historia = ref('');
const cargando = ref(false);

const crearHistoria = async () => {
  cargando.value = true;

  const prompt = `
Actúa como un escritor experto en fantasía.

Crea una historia oscura sobre "una traición" donde el protagonista sea un guerrero solitario.

Condiciones:
- Máximo 120 palabras
- Usa diálogos naturales
- Incluye emociones fuertes
- Final impactante

Historia:
`;

  const data = await generarHistoria(prompt);

  historia.value = data.historia;
  cargando.value = false;
};
</script>

<style scoped></style>
