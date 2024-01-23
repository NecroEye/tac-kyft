import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBv36w-HisGvVr3OErqNwfapGCTlE0WZCQ",
    authDomain: "tac-kyf-db.firebaseapp.com",
    projectId: "tac-kyf-db",
    storageBucket: "tac-kyf-db.appspot.com",
    messagingSenderId: "275838848162",
    appId: "1:275838848162:web:0777fd8c598724ead09bfb",
    measurementId: "G-XDR5JJVS4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
});

export const author = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(author, provider)