import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDaPD4JRiBuTpx4-DQgOPV4z6COdEPiBRk",
    authDomain: "linkedin-clone-f2ecc.firebaseapp.com",
    projectId: "linkedin-clone-f2ecc",
    storageBucket: "linkedin-clone-f2ecc.appspot.com",
    messagingSenderId: "1073386673853",
    appId: "1:1073386673853:web:c7a3c97c5027e0a59749d4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };