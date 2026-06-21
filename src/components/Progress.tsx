import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import BottomNav from './BottomNav'
import './Progress.css'
import goalImg from '../graphics/goal.png'
import keepfightingImg from '../graphics/keepfighting.png'

interface Session {
    email: string
    name: string
    targetToken: number
    collectToken: number
}

function Progress() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        const raw = localStorage.getItem('skillx_session')
        if (raw) {
            setSession(JSON.parse(raw))
        }
    }, [])


    function getLevel(percent: number) {
        if (percent >= 100) return { name: 'Goal Achieved', quote: 'Target unlocked! Keep challenging yourself.' }
        if (percent >= 76) return { name: 'Near Mastery', quote: "Almost at the finish line, don't stop now!" }
        if (percent >= 51) return { name: 'Moving Ahead', quote: 'More than halfway there, keep it up!' }
        if (percent >= 26) return { name: 'Building Up', quote: 'Keep pushing, you are making progress!' }
        return { name: 'Starting Out', quote: 'Every journey begins with a single step.' }
    }

    const collect = session?.collectToken ?? 0
    const target = session?.targetToken ?? 100
    const percent = Math.floor((collect / target) * 100)
    const level = getLevel(percent)
    const heroImg = percent >= 100 ? goalImg : keepfightingImg

    return (
        <div className="progress-container">
            <NavBar />

            <div className="progress-hero">
                <img src={heroImg} alt="level" className="hero-img" />
                <h1 className="level-name">{level.name}</h1>
                <p className="level-quote">"{level.quote}"</p>
            </div>

            <div className="progress-card">
                <p className="token-label">CURRENT PROGRESS</p>
                <div className="token-row">
                    <span className="token-collect">{collect}</span>
                    <span className="token-sep"> / {target} Tokens</span>
                </div>

                <div className="progress-bar-bg">
                    <div
                        className="progress-bar-fill"
                        style={{ width: percent + '%' }}
                    ></div>
                </div>

                <p className="percent-text">{percent}% Complete</p>
            </div>

            <BottomNav />
        </div>

    )
}

export default Progress