// initialize firebase on the server using firebase-admin package

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SANDBOX_SERVICE_ACCOUNT_KEY!
);

export const firebaseApp =
  getApps().find((it) => it.name === "firebase-admin-app") ||
  initializeApp(
    {
      credential: cert(serviceAccount),
    },
    "firebase-admin-app"
  );

export const auth = getAuth(firebaseApp);




