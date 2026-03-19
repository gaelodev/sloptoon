<template>
  <div class="h-full w-full flex justify-center items-center backdrop-blur-xs">
    <div class="w-4/12 h-3/4 bg-slate-100 rounded-2xl flex p-6 flex-col">
      <section class="flex flex-row justify-between w-full text">
        <h3 class="font-bold text-2xl">Nueva historia</h3>
        <div>×</div>
      </section>
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
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
