import { useState } from "react";
import { UseUser } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { Succes } from "./Succes";

export function Login() {

    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    );

    const { login, googleLogin, resetPassword } = UseUser()
    const navigate = useNavigate()


    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value });

    const [error, setError] = useState()

    const [succes, setSucces] = useState ()

    const handleNav = () => {
        navigate("/register")
    }

    const handleResetPassword = async () => {
        if (!user.email) return setError("Please enter your email");

        try {
            await resetPassword (user.email)
            setSucces("We sent an email with a link to reset your password")
        } catch (error) {
            setError(error.code)
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(user.email, user.password)
            navigate("/welcome")
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                setError("Incorrect password")
            }
            else if (error.code === "auth/user-not-found") {
                setError("El usuario no está registrado")
            }
            else if (error.code === "auth/too-many-requests") {
                setError("Demasiados intentos, usuario bloqueado por 5 minutos")
            }
            else if (error.code === "auth/network-request-failed") {
                setError("Sin conexión a internet")
            }
            else if (error.code === "auth/internal-error") {
                setError("Ingresa la contraseña")
            }
            else if (error.code === "auth/invalid-email") {
                setError("Email inválido")
            }
            else {
                setError(error.code)
            }
        }

    }

    const Loogle = async (e) => {
        e.preventDefault()

        try {
            await googleLogin()
            navigate('/Welcome')
        } catch (error) {
            if (error.code === "auth/popup-closed-by-user") {
                setError("Cancelado por el usuario")
            }
            else {
                setError(error.code)
            }

        }

    }


    return (

        <div className="w-screen h-screen flex justify-center items-center text-2xl">
            
            <div className="w-full max-w-sm  justiy-center items-center">
                {
                    error && <Alert message={error} />
                }
                {
                    succes && <Succes message={succes} />
                }
                <span className="bg-purple-50 text-gray-500 font-bold block text-3xl text-center mb-6 p-3 shadow-xl ">Login</span>
                <form className="bg-white shadow-xl rounded-md pt-2 pb-8 flex flex-col items-center"
                    onSubmit={handleSubmit}>

                

                <div className="py-6 mx-6">

                    <label 
                    className="text-gray-400 font-bold block" 
                    htmlFor="email">Email:
                    </label>

                    <input 
                    onChange={handleChange} 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="email@company.com" 
                    className="appearance-none shadow-lg drop-shadow-sm hover:drop-shadow-lg border-2 border-gray-200 focus:outline-none rounded-md text-black focus:border-purple-300 py-1 px-2 my-1"
                    ></input>
                    
                </div>

                <div>

                    <label 
                    className="text-gray-400 font-bold block" 
                    htmlFor="password">Password:
                    </label>

                    <input onChange={handleChange} 
                    type="password" 
                    name="password" 
                    placeholder="******" 
                    autoComplete="off"
                    className="appearance-none shadow-lg drop-shadow-sm hover:drop-shadow-lg border-2 border-gray-200 focus:outline-none rounded-md text-black focus:border-purple-300 py-1 px-2 my-1"
                    ></input>
                    <div className="flex justify-between ">
                    <p onClick={handleNav} navigate="/register" className="text-black text-sm pt-2 text-blue-500 cursor-pointer underline hover:text-blue-700">Register here</p>
                    <p onClick={handleResetPassword} className="text-black text-sm pt-2 text-blue-500 cursor-pointer underline hover:text-blue-700">Forgot password?</p>
                    </div>

                </div>
            <div className="flex flex-col mt-3 mb-1">
                <button className="text-white bg-blue-500 border-1 border-white leading-tight hover:bg-blue-700 rounded-xl py-2 px-6 text-xl shadow-lg hover:drop-shadow-lg">Login
                </button>
                </div>  
                <button onClick={Loogle} className="bg-slate-100 text-gray-500 hover:bg-slate-200 rounded-md px-6 py-2 my-2 text-xl shadow-lg hover:drop-shadow-lg">Google Login
                
                </button>
                
                </form>
                
                
            </div>
        </div>
    )
}

