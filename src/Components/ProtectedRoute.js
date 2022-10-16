import { UseUser } from "../Context/authContext"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({children}) => {

    const {user} = UseUser ()

    if (!user) return <Navigate to="/Home" />

    return <>{children}</>

}