// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvab2vqYBBSGKnMnWP55UrFDrXgRdvJZU",
  authDomain: "labwebdsmautenticar.firebaseapp.com",
  projectId: "labwebdsmautenticar",
  storageBucket: "labwebdsmautenticar.appspot.com",
  messagingSenderId: "342209996209",
  appId: "1:342209996209:web:504f816d034002a913c990",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);

export { authentication };
