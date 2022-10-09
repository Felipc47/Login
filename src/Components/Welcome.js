import { UseUser } from "../Context/authContext"

export function Welcome () {


    const {user} = UseUser()

    return <div>
        
        <h1>Welcome {user.email}</h1>

    </div>
}

