import { ref } from 'vue';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from './firebase';
export const user = ref<User | null>(null);
export const authReady = ref(false);

onAuthStateChanged(auth, (u) => {
  user.value = u;
  authReady.value = true;
});
