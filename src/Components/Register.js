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

    const {signup} = UseUser ()    
    const navigate = useNavigate()


    const handleChange = ({target: {name, value}}) => 
        setUser({...user,[name] : value});
    


    const handleSubmit = async (e) => {
        e.preventDefault()  
        try {
        await signup(user.email, user.password)
        navigate("/")
        } catch (error) {
            console.log (error.message)
        }
       
    }

    return (
        <form className="text-black" onSubmit={handleSubmit}>

            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="text" name="email" id="email" placeholder="tucorreo@algo.com" ></input>

            <label htmlFor="password">password</label>
            <input onChange={handleChange} type="password" name="password"></input>

            <button className="text-white border-2 border-white leading-tight
            hover:bg-white
            hover:text-black">Register</button>

        </form>
    )
}

