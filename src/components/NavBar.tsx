import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const navigate = useNavigate()
    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={() => navigate('/landing')}>
                SkillX
            </div>

            <div className="navbar-links">
                <span onClick={() => navigate('/landing')}>Home</span>
                <span onClick={() => navigate('/progress')}>Progress</span>
                <span onClick={() => navigate('/about')}>About</span>
            </div>

            <div className="navbar-avatar" onClick={() => navigate('/profile')}>👤</div>
            
        </nav>
    )
}

export default NavBar