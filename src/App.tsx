import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Landing from './components/Landing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  )
}

export default App

