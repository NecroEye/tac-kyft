import {signInWithGooglePopup
, createUserDocumentFromAuth} from "../../utils/firbase/firebase.utils"

export const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)

    }

    return (
        <div>
           <h1> Giriş Ekranı </h1>
           <button onClick={logGoogleUser}>Google ile Giriş yap</button>
        </div>
    )
}