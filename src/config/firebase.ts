// src/config/firebase.ts
import admin from 'firebase-admin';
import serviceAccount from '../path/to/serviceAccountKey.json'; // Path to your Firebase service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin;