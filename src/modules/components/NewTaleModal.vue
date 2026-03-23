<template>
  <div class="h-full w-full flex justify-center items-center bg-greymelon-600/40 backdrop-blur-xs">
    <div class="w-1/3 h-3/4 bg-greymelon-100 rounded-xl flex p-5 flex-col">
      <section class="flex flex-row justify-between w-full text">
        <h3 class="font-bold text-2xl">Nueva historia</h3>
        <div>×</div>
      </section>
      <section class="w-full mt-4">
        <select
          name=""
          id=""
          class="w-full h-10 border-2 border-greymelon-800 rounded-sm pl-4 pr-4"
        >
          <option value="">Género narrativo</option>
          <option value="">Fantasía</option>
          <option value="">Ciencia ficción</option>
          <option value="">Misterio</option>
          <option value="">Terror</option>
          <option value="">Suspenso</option>
          <option value="">Romance</option>
          <option value="">Aventura</option>
          <option value="">Drama</option>
          <option value="">Histórico</option>
          <option value="">Vida cotidiana</option>
          <option value="">Comedia</option>
          <option value="">Fábula / Cuento moral</option>
        </select>
        <select
          name=""
          id=""
          class="w-full h-10 border-2 border-greymelon-800 rounded-sm mt-2 pl-4 pr-4"
        >
          <option value="">Tono</option>
          <option value="">Ligero</option>
          <option value="">Humorístico</option>
          <option value="">Optimista</option>
          <option value="">Melancólico</option>
          <option value="">Nostálgico</option>
          <option value="">Oscuro</option>
          <option value="">Tenso</option>
          <option value="">Misterioso</option>
          <option value="">Épico</option>
          <option value="">Íntimo</option>
          <option value="">Reflexivo</option>
          <option value="">Poético</option>
        </select>
      </section>
      <section class="w-full flex flex-row items-center justify-between mt-4">
        <div class="w-54 border-2 border-melondrama-500 px-2 pt-1 rounded-sm">
          <p class="font-semibold text-sm/tight">1ª persona</p>
          <i class="text-[8px]">Caminé hacia el bosque sin saber lo que me encontraría.</i>
        </div>
        <div class="w-54 border-melondrama-500 px-2 pt-1 rounded-sm">
          <p class="font-semibold text-sm/tight">3ª persona</p>
          <i class="text-[8px]">Ella caminó hacia el bosque sin saber lo que encontraría.</i>
        </div>
      </section>
      <section class="w-full mt-4">
        <h4 class="mb-2 font-semibold text-lg text-greymelon-700">Extensión</h4>
        <div class="w-full flex flex-row justify-between">
          <button class="w-32 h-8 font-semibold rounded-sm">Breve</button>
          <button
            class="bg-melondrama-600 text-greymelon-100 w-32 h-8 font-semibold rounded-sm shadow-xs"
          >
            Media
          </button>
          <button class="w-32 h-8 font-semibold rounded-sm">Extensa</button>
        </div>
      </section>
      <section class="w-full mt-4">
        <h4 class="mb-2 font-semibold text-lg text-greymelon-700">Complejidad del lenguaje</h4>
        <div class="w-full flex flex-row justify-between">
          <button class="text-greymelon-900 w-24 h-8 font-semibold rounded-sm">Simple</button>
          <button
            class="bg-melondrama-600 text-greymelon-100 w-24 h-8 font-semibold rounded-sm shadow-xs"
          >
            Natural
          </button>
          <button class="text-greymelon-900 w-24 h-8 font-semibold rounded-sm">Elaborado</button>
          <button class="text-greymelon-900 w-24 h-8 font-semibold rounded-sm">Literario</button>
        </div>
      </section>
      <section class="w-full mt-4 flex flex-1">
        <textarea
          name=""
          id=""
          placeholder="Opcionalmente puedes ingresar instrucciones adicionales aquí. Ej. Nombre del protagonista: Yoshua, lugar: bosque encantado, tropo narrativo: una traición, etc."
          class="border border-greymelon-900 w-full rounded-sm px-2 py-1"
        ></textarea>
      </section>
      <section class="w-full mt-3">
        <button class="w-full h-10 bg-melondrama-500 text-greymelon-100 rounded-md font-semibold">
          Escribir historia
        </button>
      </section>
      <!--
      <section class="w-full p-1.5">
        <h4 class="pb-1">Extensión</h4>
        <div class="w-full flex flex-row justify-between">
          <button class="bg-amber-200 w-32 h-8 font-medium rounded-sm shadow-xs">Breve</button>
          <button class="bg-amber-200 w-32 h-8 font-medium rounded-sm shadow-xs">Media</button>
          <button class="bg-amber-200 w-32 h-8 font-medium rounded-sm shadow-xs">Extensa</button>
        </div>
      </section>
      <section class="w-full p-1.5">
        <h4 pb-1>Tono</h4>
        <select name="" id="" class="w-full h-8 bg-amber-50 rounded-sm pl-4 pr-4">
          <option value="">Dramático</option>
          <option value="">Humorístico</option>
          <option value="">Oscuro</option>
          <option value="">Romántico</option>
        </select>
      </section>

      <section class="w-full p-1.5">
        <h4>Otros criterios</h4>
        <div>
          <input
            type="text"
            placeholder="Nombre del protagonista"
            class="w-full h-10 bg-white rounded-md pl-2"
          />
        </div>
      </section>
      <section class="w-full p-1.5">
        <button class="w-full h-12 bg-amber-400 rounded-md font-medium">Escribir historia</button>
      </section>
      -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
