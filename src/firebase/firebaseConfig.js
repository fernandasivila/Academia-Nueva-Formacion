// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY
// Configuración obtenida desde Firebase Console > Configuración del proyecto
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "academia-oficios.firebaseapp.com",
  projectId: "academia-oficios",
  storageBucket: "academia-oficios.firebasestorage.app",
  messagingSenderId: "77135200779",
  appId: "1:77135200779:web:f03d169cd6e3b6f04ffd0e"
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar la instancia de Firestore para usar en componentes
export { db };
