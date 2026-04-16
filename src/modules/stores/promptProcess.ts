import { defineStore } from 'pinia';
import { ref } from 'vue';
import { generarHistoria } from '@/services/openai';
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
        const data = await generarHistoria(prompt);
        this.tale = data.historia;

        const saved = await saveTale(user.value!.uid, this.tale);
        this.taleId = saved.id;

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
