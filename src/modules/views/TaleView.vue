<template>
  <!--Ts component is for da view of a single tale (to read it)-->

  <!--
  <div>
    <h1>Generador de historias</h1>

    <button @click="crearHistoria">Generar historia</button>

    <p v-if="cargando">Generando...</p>

    <p v-if="historia">
      {{ historia }}
    </p>
  </div>
  -->
  <TheHeader class="h-20" />
  <section class="w-full flex justify-center">
    <div class="flex flex-col w-1/3 my-8">
      <h1 class="font-bold text-3xl text-melondrama-900 pb-6">Título de la historia</h1>
      <p class="text-greymelon-900 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem deleniti mollitia
        rem consectetur sapiente dolores veniam accusantium repellendus nesciunt iste tempora magni
        suscipit sequi, blanditiis, velit aspernatur! Incidunt, alias?
      </p>
      <p class="text-greymelon-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem deleniti mollitia
        rem consectetur sapiente dolores veniam accusantium repellendus nesciunt iste tempora magni
        suscipit sequi, blanditiis, velit aspernatur! Incidunt, alias?
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { generarHistoria } from '@/services/openai';
import TheHeader from '../components/TheHeader.vue';

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
