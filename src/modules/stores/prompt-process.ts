import { defineStore } from 'pinia';
import { ref } from 'vue';
import { generarHistoria } from '@/services/openai';

export const usePromptProcessStore = defineStore('prompt-process', {
  state: () => ({
    done: false,
    tale: '',
  }),

  actions: {
    async execute(prompt: string) {
      const data = await generarHistoria(prompt);

      this.tale = data.historia;
      this.done = true;
    },
  },
});
