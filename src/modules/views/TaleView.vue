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
      <p class="text-greymelon-900 mb-4">{{ store.tale }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { saveTale, getTaleById } from '@/services/taleService';
import { user } from '@/authState';
import { computed, onMounted, ref, watch } from 'vue';
import { usePromptProcessStore } from '../stores/promptProcess';

const route = useRoute();
const router = useRouter();
const store = usePromptProcessStore();

const taleId = computed(() => route.params.id);

onMounted(async () => {
  if (taleId) {
    const tale = await getTaleById(user.value!.uid, taleId.value as string);
    store.tale = tale?.content ?? '';
  }
});

watch(
  () => store.taleId,
  (id) => {
    if (id) {
      router.replace({ name: 'taleView', params: { id } });
    }
  },
);
</script>
