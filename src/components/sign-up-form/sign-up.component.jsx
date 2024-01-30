import {useState} from "react";

const defaultFormFields = {
    displayName: "", email: "", password: "", rePassword: ""
}

const SignUp = () => {


    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, rePassword} = formFields

    console.log(formFields)

    const handleChanges = (event) => {

        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})

    };

    return (<div>

        <h1>E-posta ve Şifre ile Giriş Yap</h1>

        <form onSubmit={() => {
        }}>
            <label>Kullanıcı Adı</label>
            <input
                type={"text"}
                required
                onChange={handleChanges}
                name={"displayName"}
                value={displayName}/>

            <label>E-Posta</label>
            <input
                type={"email"}
                required
                onChange={handleChanges}
                name={"email"}
                value={email}/>

            <label>Şifre</label>
            <input
                type={"password"}
                required
                onChange={handleChanges}
                name={"password"}
                value={password}/>

            <label>Şifre Tekrarı</label>
            <input
                type={"password"}
                required
                onChange={handleChanges}
                name={"rePassword"}
                value={rePassword}/>

            <button type={"submit"}>Kayıt Ol</button>

        </form>
    </div>)

}
export default SignUp