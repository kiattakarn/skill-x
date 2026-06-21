import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import BottomNav from './BottomNav'
import './Profile.css'

interface Session {
  email: string
  name: string
  targetToken: number
  collectToken: number
}

function Profile() {
  const [session, setSession] = useState<Session | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const raw = localStorage.getItem('skillx_session')
    if (raw) setSession(JSON.parse(raw))
  }, [])

  function handleLogout() {
    localStorage.removeItem('skillx_session')
    navigate('/')
  }

  return (
    <div className="profile-container">
      <NavBar />
      <div className="profile-card">
        <div className="profile-avatar">👤</div>
        <h2>{session?.name}</h2>
        <p>{session?.email}</p>
        <p className="token-info">🪙 {session?.collectToken} / {session?.targetToken} Tokens</p>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </div>
      <BottomNav />
    </div>
  )
}

export default Profile