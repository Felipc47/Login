import { useContext } from "react"
import { context } from "../Context/authContext"

export function Home () {

    const authContext = useContext (context)

    console.log(authContext)

    return <div>Home</div>
}

