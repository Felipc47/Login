import { Login } from "../Context/authContext"
import { useState } from "react"

export function Welcome () {

    const {user} = useState()

    console.log(user)
}

