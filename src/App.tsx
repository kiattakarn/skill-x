import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Landing from './components/Landing'
import CourseDetail from './components/CourseDetail'
import Progress from './components/Progress'
import Profile from './components/Profile'
import Chat from './components/Chat'
import About from './components/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App

