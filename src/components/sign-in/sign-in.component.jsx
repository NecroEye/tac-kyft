import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../utils/firbase/firebase.utils"
import SignUpComponent from "../sign-up-form/sign-up.component";

export const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)

    }

    const logReDirectUser = async () => {
        const {user} = await signInWithGoogleRedirect()

    }

    return (
        <div>
            <h1> Giriş Ekranı </h1>
            <button onClick={logGoogleUser}>Google ile Giriş yap</button>
            <SignUpComponent/>

        </div>
    )
}