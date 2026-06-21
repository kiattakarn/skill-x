import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import BottomNav from './BottomNav'
import './CourseDetail.css'

interface CourseDtl {
    id: string
    title: string
    duration: string
    tokens: number
}

interface Course {
    id: string
    name: string
    description: string
    category: string
    image: string
    tokens: number
    coursesDtl: CourseDtl[]
}

function CourseDetail() {
    const { id } = useParams()
    const [course, setCourse] = useState<Course | null>(null)

    useEffect(() => {
        fetch('http://localhost:3005/courses/' + id)
            .then((res) => res.json())
            .then((data) => setCourse(data))
    }, [id])

    const [completed, setCompleted] = useState<string[]>([])

    useEffect(() => {
        const raw = localStorage.getItem('skillx_completed')
        if (raw) {
            setCompleted(JSON.parse(raw))
        }
    }, [])

    if (!course) return <p>Loading...</p>

    function handleFinish(lessonId: string, lessonTokens: number) {
        // เพิ่ม lessonId เข้า completed list
        const newCompleted = [...completed, lessonId]
        setCompleted(newCompleted)
        localStorage.setItem('skillx_completed', JSON.stringify(newCompleted))

        // บวก token เข้า session
        const raw = localStorage.getItem('skillx_session')
        if (!raw) return
        const session = JSON.parse(raw)
        session.collectToken = session.collectToken + lessonTokens
        localStorage.setItem('skillx_session', JSON.stringify(session))

        // เช็คว่าถึง 100% หรือยัง
        const percent = Math.floor((session.collectToken / session.targetToken) * 100)
        if (percent >= 100) {
            alert('🎉 Goal Achieved! คุณสะสม Token ครบแล้ว!')
        }
    }

    const lessonItems = []
    for (let i = 0; i < course.coursesDtl.length; i++) {
        const lesson = course.coursesDtl[i]
        const isDone = completed.includes(lesson.id)

        lessonItems.push(
            <div key={lesson.id} className="lesson-card">
                <div className="lesson-info">
                    <p className="lesson-title">{lesson.title}</p>
                    <p className="lesson-meta">{lesson.duration} · 🪙 {lesson.tokens} Tokens</p>
                </div>
                <button
                    className={isDone ? 'btn-done' : 'btn-finish'}
                    disabled={isDone}
                    onClick={() => handleFinish(lesson.id, lesson.tokens)}
                >
                    {isDone ? 'Done ✓' : 'Finish'}
                </button>
            </div>
        )
    }

    return (
        <div className="course-detail-container">
            <NavBar />

            <div className="course-header">
                <img src={course.image} alt={course.name} className="course-header-img" />
                <div className="course-header-info">
                    <span className="course-category">{course.category}</span>
                    <h1>{course.name}</h1>
                    <p>{course.description}</p>
                </div>
            </div>

            <div className="lesson-list">
                <h2>บทเรียนทั้งหมด</h2>
                {lessonItems}
            </div>

            <BottomNav />
        </div>
    )
}

export default CourseDetail