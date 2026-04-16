<template>
  <div class="flex flex-col mx-12 w-full">
    <h1 class="text-3xl font-bold text-greymelon-900 my-8">¡Hola de nuevo!</h1>
    <h2 class="text-2xl font-medium my-8 text-greymelon-700">Tus historias recientes</h2>
    <section class="flex flex-row flex-wrap gap-8 w-full mb-12">
      <!-- Loading -->
      <p v-if="loading" class="text-greymelon-600">Cargando historias</p>

      <!-- Sin historias -->
      <p v-else-if="tales.length === 0" class="text-greymelon-600">
        Aquí se mostrarán las historias que generes.
      </p>

      <!-- Historias -->
      <template v-else>
        <TaleCard
          v-for="tale in tales"
          :key="tale.id"
          :summarize="summarize(tale.content)"
          :creation-date="tale.createdAt.toLocaleDateString('es-MX')"
          @clicked="goToTale(tale.id)"
        />
      </template>
    </section>
    <NewTaleModal v-if="isModalOpen" @modalClosed="handleModalClosed" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import TaleCard from '../components/TaleCard.vue';
import { useRouter } from 'vue-router';
import { getTales, type Tale } from '@/services/taleService';
import { user } from '@/authState';

const isModalOpen = ref(false);
const router = useRouter();
const tales = ref<Tale[]>([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  tales.value = await getTales(user.value!.uid);
  loading.value = false;
});

const goToTale = (id: string) => {
  router.push({ name: 'taleView', params: { id } });
};

const summarize = (content: string): string => {
  const words = content.split(' ');
  if (words.length <= 40) return content;
  return words.slice(0, 40).join(' ') + '...';
};

const loadTales = async () => {
  tales.value = await getTales(user.value!.uid);
};

onMounted(() => {
  loadTales();
});

const handleModalClosed = async () => {
  console.log('MODAL CERRADO');
  isModalOpen.value = false;

  // 🔥 recargar SOLO las historias
  await loadTales();
};
</script>
