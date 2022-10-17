import {Routes, Route} from 'react-router-dom'
import {Home} from './Components/Home'
import {Login} from './Components/Login'
import { Register } from './Components/Register'
import { AuthProvider } from './Context/authContext'
import { Welcome } from './Components/Welcome'
import { ProtectedRoute } from './Components/ProtectedRoute'

export default function App() {
  return (
    <div className="bg-purple-100 h-screen text-white text-3xl">
    
    <AuthProvider>
    <Routes>  
      <Route path="/" element ={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/welcome" element={
      <ProtectedRoute>
      <Welcome/>
      </ProtectedRoute>
      }/>
    </Routes>
    </AuthProvider>
    </div>
  )
}