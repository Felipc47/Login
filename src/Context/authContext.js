import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut,
         GoogleAuthProvider,
         signInWithPopup,
        } from "firebase/auth";
import { auth } from "../firebase-config";



export const context = createContext()


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    const signup = async (email, password) =>

        await createUserWithEmailAndPassword(auth, email, password)


    const login = async (email, password) => {

        const usercredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(usercredentials)
    }


    const logout = () => signOut(auth);

    const googleLogin = () => {
        const providerGoogle = new GoogleAuthProvider ()
        return signInWithPopup(auth, providerGoogle)
        
       
    }

    

    useEffect (() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, []
    )

    return <context.Provider value={{ signup, login, user, logout, googleLogin }}> {children} </context.Provider>
}

export const UseUser = () => {

    const userInfo = useContext(context)
    if (!userInfo) throw new Error('There is not autho provider')
    return userInfo
}