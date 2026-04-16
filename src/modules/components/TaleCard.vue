<template>
  <div
    class="border-melondrama-400 bg-melondrama-100 h-auto px-4 py-4 w-80 rounded-lg shadow-md shadow-greymelon-100 hover:cursor-pointer hover:shadow-greymelon-200 hover:border-3 transition-all"
    @click="emit('clicked')"
  >
    <!--<h3 class="text-xl font-bold text-melondrama-800">{{ title }}</h3>-->
    <p class="text-sm mt-2 text-greymelon-700">
      {{ summarize }}
    </p>
    <p class="text-xs mt-1 text-greymelon-500">{{ creationDate }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  summarize: string;
  creationDate: string;
}

const emit = defineEmits(['clicked']);

defineProps<Props>();
</script>
