import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth"
import {
    doc,
    getFirestore,
    getDoc,
    setDoc
} from "firebase/firestore"
import {Exception} from "sass";


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

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
});


export const author = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(author, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(author, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {

    const UserDocRef = doc(db, "users", userAuth.uid)

    console.log(UserDocRef)

    const userSnapshot = await getDoc(UserDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
    if (!userSnapshot.exists()) {

        const {displayName, email} = userAuth
        const createdAt = new Date()


        try {

            await setDoc(UserDocRef, {
                displayName,
                email,
                createdAt
            })


        } catch (error) {

            console.log("The user not exist ", error.message)


        }
    }

    return UserDocRef

}