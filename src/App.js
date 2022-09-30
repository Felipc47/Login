import {Routes, Route} from 'react-router-dom'
import {Home} from './Components/Home'
import {Login} from './Components/Login'
import { Register } from './Components/Register'
import { AuthProvider } from './Context/authContext'

export default function App() {
  return (
    <div className="bg-black h-screen text-white text-3xl">
    
    <AuthProvider>
    <Routes>  
      <Route path="/" element={ <Home/>} />
      <Route path="/login" element ={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </AuthProvider>
    </div>
  )
}