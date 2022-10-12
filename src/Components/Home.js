import { useNavigate } from "react-router-dom"



export function Home () {

    const nav = useNavigate ()

    const handleNav = () =>{
        nav('/Login')
    }

    return (
    <div>
        <h1>Home</h1>

    <button onClick={handleNav}>Login </button>


    </div>

    )
    
}

