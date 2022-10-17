import { useNavigate } from "react-router-dom"
import { UseUser } from "../Context/authContext"


export function Welcome () {

    const navigate = useNavigate ()

    const {user, logout} = UseUser()


    const handleLogout = async () => {
        await logout ()
        navigate("/")
    }


    return (<div className="w-screen h-screen flex justify-center items-center text-2xl">
        <div 
        className="w-full max-w-xs flex flex-col justiy-center items-center bg-white text-gray-500 py-5">
        
            Welcome {user.displayName}
            <img className="my-6 rounded-xl" referrerpolicy = "no-referrer" src={user.photoURL} width="120px" />
        
            
            
            
            
            
            <button
            className="text-white bg-red-500 border-1 border-white leading-tight hover:bg-red-700 rounded-xl py-2 px-6 text-xl shadow-lg hover:drop-shadow-lg"
            onClick={handleLogout}> Logout  
            </button>
    
        </div>
    
        </div>)
}

