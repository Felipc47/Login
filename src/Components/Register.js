import { useState } from "react";
import { UseUser } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

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
            navigate("/")
        } catch (error) {
            if (error.code === "auth/weak-password") {
                setError("La contraseña debe tener al menos 6 caracteres")
            } else if (error.code === "auth/invalid-email") {
                setError("email inválido")
            } else if (error.code === "auth/email-already-in-use") {
                setError("Email en uso")
            }
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
                hover:text-black">Register</button>

            </form>
        </div>
    )
}

