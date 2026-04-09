<template>
  <div
    class="border-l-3 border-melondrama-400 bg-melondrama-100 h-auto px-4 py-4 w-80 rounded-lg shadow-md shadow-greymelon-100 hover:cursor-pointer hover:bg-melondrama-200 hover:shadow-greymelon-200 transition-all"
  >
    <h3 class="text-xl font-bold text-melondrama-800">{{ title }}</h3>
    <p class="text-xs mt-2 text-greymelon-700">
      {{ summarize }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  summarize: string;
}

defineProps<Props>();
</script>
