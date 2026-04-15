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

  <section class="w-full flex justify-center">
    <div class="flex flex-col w-2/5 my-8">
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

<script setup lang="ts"></script>
