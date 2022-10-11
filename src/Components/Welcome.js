import { useNavigate } from "react-router-dom"
import { UseUser } from "../Context/authContext"

export function Welcome () {

    const navigate = useNavigate ()

    const {user, logout} = UseUser()

    const handleLogout = async () => {
        await logout ()
        navigate("/login")
    }

    return <div>
        
        <h1>Welcome {user.email}</h1>
        <button onClick={handleLogout}> Logout  </button>
    </div>
}

