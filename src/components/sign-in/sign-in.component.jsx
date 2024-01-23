import {signInWithGooglePopup} from "../../utils/firbase/firebase.utils"


export const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }

    return (
        <div>
           <h1> Giriş Ekranı </h1>
           <button onClick={logGoogleUser}>Google ile Giriş yap</button>
        </div>
    )
}