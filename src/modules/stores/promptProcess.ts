import { defineStore } from 'pinia';
import { ref } from 'vue';
import { generateTale } from '@/services/openai';
import { deleteTale, saveTale } from '@/services/taleService';
import { user } from '@/authState';

export const usePromptProcessStore = defineStore('promptProcess', {
  state: () => ({
    done: false,
    tale: '',
    taleId: '',
    error: '',
  }),

  actions: {
    async execute(prompt: string) {
      this.error = '';
      try {
        const res = await fetch('/api/generate-tale', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt }),
        });

        const data = await res.json();

        this.tale = data.historia;
        this.taleId = data.id;
        this.done = true;
      } catch {
        this.error = 'Ocurrió un error inesperado. Intente de nuevo más tarde.';
      }
    },
    async deleteTaleById(taleId: string) {
      try {
        await deleteTale(user.value!.uid, taleId);
      } catch {
        this.error = 'No se pudo eliminar la historia.';
      }
    },
  },
});
