import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import logo from '../graphics/skill-x-logo.png'

function checkLogin(email: string, password: string): boolean {
    const raw = localStorage.getItem('skillx_users')
    if (!raw) return false

    const users = JSON.parse(raw)

    for (let i = 0; i < users.length; i++) {
        const user = users[i]
        if (user.email === email && user.password === password) {
            return true
        }
    }

    return false
}



function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    function handleSubmit() {
        setError('')

        if (!email || !password) {
            setError('กรุณากรอก Email และ Password')
            return
        }

        const ok = checkLogin(email, password)
        if (ok) {
            navigate('/landing')
        } else {
            setError('Email หรือ Password ไม่ถูกต้อง')
        }
    }

    return (
        <div className="login-container">
            {/* ฝั่งซ้าย: รูปภาพและข้อความโปรย (จะซ่อนบน Mobile) */}
            <div className="login-banner">
                <h1>Skill-X</h1>
                <h2>Master the Future of Technology</h2>
                <p>50k+ Active Learners</p>
            </div>

            <div className="login-form-wrapper">
                <div className="login-form">
                    <img src={logo} alt="Skill-X Logo" className="logo" />
                    <h2>Welcome to Skill-X</h2>

                    {/* ช่องกรอกข้อมูลต่างๆ */}
                    <div className="input-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="📧 name@company.com" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <div className="password-field">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="🔒 ••••••••" value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword((prev) => !prev)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <button className="btn-sign-in" onClick={handleSubmit} >Sign In</button>
                    <div className="sign-up-wrapper">
                        <span className="sign-up">Do you have an account? &nbsp; </span>
                        <span className="sign-up-link">&nbsp; Sign Up &nbsp; </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login