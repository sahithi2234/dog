// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC6w4WAcCr7UVMi7YETpm5mHY0mjKmYZ6M",
    authDomain: "whatsapp-clone-95a6c.firebaseapp.com",
    projectId: "whatsapp-clone-95a6c",
    storageBucket: "whatsapp-clone-95a6c.appspot.com",
    messagingSenderId: "952765037121",
    appId: "1:952765037121:web:6744a169960016aa7b64c0",
    measurementId: "G-G4TM1T15RG"
  };

  //initial the app with firebase config

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
   const auth=firebase.auth();
   const provider =new firebase.auth.GoogleAuthProvider();

   export {auth,provider}
   export default db;