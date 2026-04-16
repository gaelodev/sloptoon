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
        console.log(res.status);
        const data = await res.json();
        this.tale = data.historia;
        this.taleId = data.id;
        this.done = true;

        const saved = await saveTale(user.value!.uid, this.tale);
        this.taleId = saved.id;
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
