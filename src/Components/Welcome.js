import { useNavigate } from "react-router-dom"
import { UseUser } from "../Context/authContext"

export function Welcome () {

    const navigate = useNavigate ()

    const {user, logout} = UseUser()

    const handleLogout = async () => {
        await logout ()
        navigate("/")
    }

    return <div>
        
        <h1>Welcome {user.displayName}</h1>
        <button onClick={handleLogout}> Logout  </button>
    </div>
}

