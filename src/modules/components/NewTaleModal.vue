<template>
  <div class="h-full w-full flex justify-center items-center bg-greymelon-600/40 backdrop-blur-xs">
    <div class="w-1/3 min-h-3/4 bg-greymelon-100 rounded-xl flex p-5 flex-col">
      <section class="flex flex-row justify-between w-full text">
        <h3 class="font-bold text-2xl">Nueva historia</h3>
        <div
          class="px-3 py-2 text-xs hover:bg-greymelon-200 rounded-full cursor-pointer"
          @click="$emit('modalClosed')"
        >
          ✕
        </div>
      </section>
      <section class="w-full mt-4">
        <p class="text-sm text-greymelon-500 mb-2">
          El género y tono serán aleatorios si no los eliges.
        </p>
        <select
          name=""
          id="genreSelect"
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
          id="toneSelect"
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
        <button
          @click="pov = 'first'"
          :class="[
            'hover:bg-greymelon-200 rounded-sm px-2 pt-1 cursor-pointer',
            pov === 'first'
              ? 'w-54 border-2 border-melondrama-500 px-2 pt-1 rounded-sm'
              : 'w-54 px-2 pt-1 rounded-sm',
          ]"
        >
          <div>
            <p class="font-semibold text-sm/tight text-left">1ª persona</p>
            <i class="text-[8px]">Caminé hacia el bosque sin saber lo que me encontraría.</i>
          </div>
        </button>
        <button
          @click="pov = 'third'"
          :class="[
            'hover:bg-greymelon-200 rounded-sm px-2 pt-1 cursor-pointer',
            pov === 'third'
              ? 'w-54 border-2 border-melondrama-500 px-2 pt-1 rounded-sm'
              : 'w-54 px-2 pt-1 rounded-sm',
          ]"
        >
          <div>
            <p class="font-semibold text-sm/tight text-left">3ª persona</p>
            <i class="text-[8px]">Ella caminó hacia el bosque sin saber lo que encontraría.</i>
          </div>
        </button>
      </section>
      <section class="w-full mt-4">
        <h4 class="mb-2 font-semibold text-lg text-greymelon-700">Extensión</h4>
        <div class="w-full flex flex-row justify-between">
          <button
            @click="extension = 'short'"
            :class="[
              extension === 'short'
                ? 'bg-melondrama-600 text-greymelon-100 w-32 h-8 font-semibold rounded-sm shadow-xs'
                : 'w-32 h-8 font-semibold rounded-sm hover:bg-greymelon-200 cursor-pointer',
            ]"
          >
            Breve
          </button>
          <button
            @click="extension = 'avg'"
            :class="[
              extension === 'avg'
                ? 'bg-melondrama-600 text-greymelon-100 w-32 h-8 font-semibold rounded-sm shadow-xs'
                : 'w-32 h-8 font-semibold rounded-sm hover:bg-greymelon-200 cursor-pointer',
            ]"
          >
            Media
          </button>
          <button
            @click="extension = 'long'"
            :class="[
              extension === 'long'
                ? 'bg-melondrama-600 text-greymelon-100 w-32 h-8 font-semibold rounded-sm shadow-xs'
                : 'w-32 h-8 font-semibold rounded-sm hover:bg-greymelon-200 cursor-pointer',
            ]"
          >
            Extensa
          </button>
        </div>
      </section>
      <section class="w-full mt-4">
        <h4 class="mb-2 font-semibold text-lg text-greymelon-700">Complejidad del lenguaje</h4>
        <div class="w-full flex flex-row justify-between">
          <button
            @click="complexity = 'simple'"
            :class="[
              complexity === 'simple'
                ? 'bg-melondrama-600 text-greymelon-100 w-24 h-8 font-semibold rounded-sm shadow-xs'
                : 'text-greymelon-900 w-24 h-8 font-semibold rounded-sm hover:bg-greymelon-200 cursor-pointer',
            ]"
          >
            Simple
          </button>
          <button
            @click="complexity = 'natural'"
            :class="[
              complexity === 'natural'
                ? 'bg-melondrama-600 text-greymelon-100 w-24 h-8 font-semibold rounded-sm shadow-xs'
                : 'text-greymelon-900 w-24 h-8 font-semibold rounded-sm hover:bg-greymelon-200 cursor-pointer',
            ]"
          >
            Natural
          </button>
          <button
            @click="complexity = 'elaborated'"
            :class="[
              complexity === 'elaborated'
                ? 'bg-melondrama-600 text-greymelon-100 w-24 h-8 font-semibold rounded-sm shadow-xs'
                : 'text-greymelon-900 w-24 h-8 font-semibold rounded-sm hover:bg-greymelon-200 cursor-pointer',
            ]"
          >
            Elaborado
          </button>
          <button
            @click="complexity = 'literary'"
            :class="[
              complexity === 'literary'
                ? 'bg-melondrama-600 text-greymelon-100 w-24 h-8 font-semibold rounded-sm shadow-xs'
                : 'text-greymelon-900 w-24 h-8 font-semibold rounded-sm hover:bg-greymelon-200 cursor-pointer',
            ]"
          >
            Literario
          </button>
        </div>
      </section>
      <section class="w-full mt-4 flex flex-1">
        <textarea
          name=""
          id="extraConditions"
          placeholder="Opcionalmente puedes ingresar instrucciones adicionales aquí. Ej. Nombre del protagonista: Yoshua, lugar: bosque encantado, tropo narrativo: una traición, etc."
          class="border border-greymelon-900 w-full rounded-sm px-2 py-1"
        ></textarea>
      </section>
      <section class="w-full mt-3">
        <button
          class="w-full h-10 bg-melondrama-500 text-greymelon-100 rounded-md font-semibold hover:bg-melondrama-600 transition-all cursor-pointer"
          @click="generatePrompt"
          id="writeButton"
        >
          Escribir historia
        </button>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePromptProcessStore } from '../stores/promptProcess';
import { saveTale } from '@/services/taleService';
import { user } from '@/authState';
import { useRouter } from 'vue-router';

type Extension = 'short' | 'avg' | 'long';
type Pov = 'first' | 'third';
type Complexity = 'natural' | 'simple' | 'elaborated' | 'literary';

const router = useRouter();
const extension = ref<Extension>('avg');
const pov = ref<Pov>('first');
const complexity = ref<Complexity>('natural');
const store = usePromptProcessStore();

let prompt: string;

interface Props {
  open: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(['modalClosed']);

const generatePrompt = () => {
  const writeButton = document.getElementById('writeButton') as HTMLButtonElement;
  writeButton.disabled = true;
  writeButton.className =
    'w-full h-10 bg-melondrama-400 text-greymelon-100 rounded-md font-semibold transition-all cursor-not-allowed';

  const povMap = {
    first: 'primera',
    third: 'tercera',
  };

  const extensionMap = {
    short: 'de 100 a 300 palabras',
    avg: 'de 300 a 600 palabras',
    long: 'de 600 a 1200 palabras',
  };

  const complexityMap = {
    simple: 'simple',
    natural: 'natural',
    elaborated: 'elaborado',
    literary: 'literario',
  };

  const promptPov = povMap[pov.value];
  const promptExtension = extensionMap[extension.value];
  const promptComplexity = complexityMap[complexity.value];

  const genreSelect = document.getElementById('genreSelect') as HTMLSelectElement;
  const genreSelected = genreSelect.options[genreSelect.selectedIndex];

  const toneSelect = document.getElementById('toneSelect') as HTMLSelectElement;
  const toneSelected = toneSelect.options[toneSelect.selectedIndex];

  const extraConditionsText = document.getElementById('extraConditions') as HTMLTextAreaElement;

  prompt = `
  Escribe una historia original con las siguientes características:

  Género: ${genreSelected.text}
  Tono: ${toneSelected.text}
  Narrador: ${promptPov} persona
  Extensión: ${promptExtension}
  Complejidad del lenguaje: ${promptComplexity}

  Condiciones adicionales:
  ${extraConditionsText?.value === '' ? 'Ninguna.' : extraConditionsText?.value}

  Instrucciones:
  - El género define la estructura narrativa y el tipo de conflicto.
  - El tono define la atmósfera emocional y el estilo de la narración.
  - Mantén coherencia entre género y tono.
  - Respeta estrictamente la extensión indicada.
  - No incluyas explicaciones ni comentarios fuera de la historia.
  - Género y tono que se especifique, o en su caso, aleatorios.

  Genera únicamente la historia.
`;

  writeTale(prompt);
};

const isGenerating = ref(false);

const writeTale = async (prompt: string) => {
  if (isGenerating.value) return;

  isGenerating.value = true;

  try {
    await store.execute(prompt);

    emit('modalClosed');
    console.log(store.taleId);
    router.push(`/tales/${store.taleId}`);
  } catch (error) {
  } finally {
    isGenerating.value = false;
    store.$reset();
  }
};
</script>
