import { useState } from "react";
import { UseUser } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Register() {

    const [user, setUser] = useState(
        {
            email: '',
            password: ''
        }
    );

    const { signup } = UseUser()
    const navigate = useNavigate()


    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value });

    const [error, setError] = useState()



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(user.email, user.password)
            navigate("/Welcome")
        } catch (error) {
            if (error.code === "auth/weak-password") {
                setError("La contraseña debe tener al menos 6 caracteres")
            } else if (error.code === "auth/invalid-email") {
                setError("email inválido")
            } else if (error.code === "auth/email-already-in-use") {
                setError("Email en uso")
            } else {
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
                <span className="bg-purple-50 text-gray-500 font-bold block text-3xl text-center mb-6 p-3    shadow-xl ">Register</span>
            <form className="bg-white shadow-xl rounded-md pt-2 pb-8 flex flex-col items-center" 
                  onSubmit={handleSubmit}>

            <div className="py-6 mx-6 flex flex-col justify-center" >

                <label className="text-gray-500 font-bold block" htmlFor="email">Email:</label>

                <input className="appearance-none shadow-lg drop-shadow-sm hover:drop-shadow-lg border-2 border-gray-200 focus:outline-none rounded-md text-black focus:border-purple-300 py-1 px-2 my-1" onChange={handleChange} type="text" name="email" id="email" placeholder="email@company.com" ></input>
            

                <label className="text-gray-500 font-bold block mt-8 " htmlFor="password">Password:</label>
                
                <input 
                className="appearance-none shadow-lg drop-shadow-sm hover:drop-shadow-lg border-2 border-gray-200 focus:outline-none rounded-md text-black focus:border-purple-300 py-1 px-2 my-1"
                onChange={handleChange} type="password" name="password" placeholder="******"
                autoComplete="off"
                ></input>

                
            </div>
            <button className="text-white bg-blue-500 border-1 border-white leading-tight hover:bg-blue-700 rounded-xl py-2 px-6 text-xl shadow-lg hover:drop-shadow-lg">Register</button>
            </form>
        </div>
        </div>
    )
}

