import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/firebase'; // tu instancia de Firestore

export interface Tale {
  id: string;
  content: string;
  createdAt: Date;
}

// Referencia a la subcolección del usuario
const talesRef = (userId: string) => collection(db, 'users', userId, 'tales');

// Guardar una nueva historia
export async function saveTale(userId: string, content: string): Promise<Tale> {
  const docRef = await addDoc(talesRef(userId), {
    content,
    createdAt: serverTimestamp(),
  });

  return {
    id: docRef.id,
    content,
    createdAt: new Date(),
  };
}

// Obtener todas las historias del usuario
export async function getTales(userId: string): Promise<Tale[]> {
  const q = query(talesRef(userId), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    content: doc.data().content as string,
    createdAt: (doc.data().createdAt as Timestamp).toDate(),
  }));
}

// Obtener una historia por id (para la URL /tale/:id)
export async function getTaleById(userId: string, taleId: string): Promise<Tale | null> {
  const docRef = doc(db, 'users', userId, 'tales', taleId);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    content: snapshot.data().content as string,
    createdAt: (snapshot.data().createdAt as Timestamp).toDate(),
  };
}

// Eliminar una historia
export async function deleteTale(userId: string, taleId: string): Promise<void> {
  await deleteDoc(doc(db, 'users', userId, 'tales', taleId));
}
