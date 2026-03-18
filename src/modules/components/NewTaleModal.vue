<template>
  <button @click="crearHistoria">Generar historia</button>

  <p v-if="cargando">Generando historia... ✨</p>

  <p v-if="historia">
    {{ historia }}
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { generarHistoria } from '@/services/openai';

const genero = ref('fantasía');
const tono = ref('oscuro');
const tema = ref('una traición');
const protagonista = ref('un guerrero solitario');
const longitud = ref(150);

const historia = ref('');
const cargando = ref(false);

const crearHistoria = async () => {
  cargando.value = true;

  const prompt = `
Actúa como un escritor experto en ${genero.value}.

Crea una historia ${tono.value} sobre "${tema.value}" donde el protagonista sea ${protagonista.value}.

Condiciones:
- Máximo ${longitud.value} palabras
- Usa diálogos naturales
- Incluye emociones fuertes
- Final impactante

Haz que el lector no pueda parar de leer.

Historia:
`;

  const data = await generarHistoria(prompt);

  historia.value = data.historia;
  cargando.value = false;
};
</script>

<style scoped></style>
