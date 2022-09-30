import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase-config";



export const context = createContext()


export function AuthProvider({ children }) {

    const signup = async (email, password) => {
       
       await  createUserWithEmailAndPassword(auth,email,password)
    }


    return <context.Provider value={{ signup }}> {children} </context.Provider>
}

export const UseUser = () => {

    const userInfo = useContext(context)
    if (!userInfo) throw new Error ('There is not autho provider')
    return userInfo

}