import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { async } from "@firebase/util";



export const context = createContext()


export function AuthProvider({ children }) {

    const signup = async (email, password) => 

        await createUserWithEmailAndPassword(auth, email, password)


    const login = async (email, password) => {

    const usercredentials = await signInWithEmailAndPassword (auth, email, password)
        console.log(usercredentials)
}
    


    return <context.Provider value={{ signup, login }}> {children} </context.Provider>
}

export const UseUser = () => {

    const userInfo = useContext(context)
    if (!userInfo) throw new Error('There is not autho provider')
    return userInfo

}