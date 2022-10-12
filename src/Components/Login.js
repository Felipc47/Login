import { useState } from "react";
import { UseUser } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

export function Login() {

    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    );

    const { login, googleLogin } = UseUser()
    const navigate = useNavigate()


    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value });

    const [error, setError] = useState()



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(user.email, user.password)
            navigate("/welcome")
        } catch (error) {
            if (error.code === "auth/wrong-password"){
                setError("La contraseña es incorrecta")
            }
            else if (error.code === "auth/user-not-found") {
                setError ("El usuario no está registrado")
            }
            else if (error.code === "auth/too-many-requests") {
                setError("Demasiados intentos, usuario bloqueado por 5 minutos")
            }
            else{
            setError(error.code)}
        }

    }

    const Loogle = async (e) => {
        e.preventDefault()
        
        try {
            await googleLogin ()
            navigate('/Welcome')
        } catch (error) {
            setError(error.code)
            
        }
    
    }


    return (
        <div>
            {
                error && <p>{error}</p>
            }
            <form className="text-black" onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type="text" name="email" id="email" placeholder="email@company.com" ></input>

                <label htmlFor="password">password</label>
                <input onChange={handleChange} type="password" name="password" placeholder="******"></input>

                <button className="text-white border-2 border-white leading-tight
                hover:bg-white
                hover:text-black">Login</button>
                <button onClick={Loogle}   className="text-white border-2 border-white">
                    Google login
                </button>

            </form>
        </div>
    )
}

