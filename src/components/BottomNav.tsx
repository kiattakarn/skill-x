import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BottomNav.css'

function BottomNav() {
    const navigate = useNavigate()
    return (
        <nav className="bottom-nav">
            <div onClick={() => navigate('/landing')}>
                <span>🏠</span>
                <p>Home</p>
            </div>
            <div onClick={() => navigate('/progress')}>
                <span>📊</span>
                <p>Progress</p>
            </div>
            <div onClick={() => navigate('/chat')}>
                <span>💬</span>
                <p>Chat</p>
            </div>
            <div onClick={() => navigate('/profile')}>
                <span>👤</span>
                <p>Profile</p>
            </div>
        </nav>
    )
}

export default BottomNav