import { useState } from "react"

export function Login () {

    const [user, setUser] = useState ({
        email:'',
        password:''
    })


    return <div>
        <form>

            <input className="text-black" type="email" id="email" /> 
            <input type="password" id="password"/> 


        </form>
        </div>

    
}
