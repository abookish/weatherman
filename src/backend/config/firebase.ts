// config/firebase.ts
import admin from "firebase-admin";
//import serviceAccount from "./serviceAccountKey.json"; // your key

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert("todo"),
  });
}

export default admin;
