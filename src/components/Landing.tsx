import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import BottomNav from './BottomNav'
import './Landing.css'

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

function Landing() {
  const [courses, setCourses] = useState<Course[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchCourses()
    fetchCategories()
  }, [])

  function fetchCourses() {
    fetch('http://localhost:3005/courses')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data)
        setLoading(false)
      })
  }

  function fetchCategories() {
    fetch('http://localhost:3005/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }

  if (loading) return <p>Loading...</p>

  // สร้างปุ่ม category ทั้งหมด
  const categoryButtons = []
  for (let i = 0; i < categories.length; i++) {
    categoryButtons.push(
      <button
        key={categories[i]}
        className={selectedCategory === categories[i] ? 'active' : ''}
        onClick={() => setSelectedCategory(categories[i])}
      >
        {categories[i]}
      </button>
    )
  }

  const filteredCourses = []
  for (let i = 0; i < courses.length; i++) {
    if (selectedCategory === 'All') {
      filteredCourses.push(courses[i])
    } else if (courses[i].category === selectedCategory) {
      filteredCourses.push(courses[i])
    }
  }

  // สร้าง card course ทั้งหมด
  const courseCards = []
  for (let i = 0; i < filteredCourses.length; i++) {
    courseCards.push(
      <div key={filteredCourses[i].id} className="course-card" onClick={() => navigate('/course/' + filteredCourses[i].id)}>
        <img src={filteredCourses[i].image} alt={filteredCourses[i].name} />
        <h3>{filteredCourses[i].name}</h3>
        <p>{filteredCourses[i].category}</p>
        <p>🪙 {filteredCourses[i].tokens} Tokens</p>
      </div>
    )
  }

  return (
    <div className="landing-container">
      <NavBar />

      <div className="hero">
        <div className="hero-text">
          <h2>Boost Your <span className="hero-highlight">Knowledge</span></h2>
          <p>Elevate your career and skills through expert-crafted learning paths.</p>
          <div className="hero-buttons">
            <button className="hero-btn-coming">Enroll Soon</button>
          </div>
        </div>
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400"
          alt="hero"
        />
      </div>

      {/* Filter Pills */}
      <div className="filter-pills">
        <button className={selectedCategory === 'All' ? 'active' : ''} onClick={() => setSelectedCategory('All')}>All</button>
        {categoryButtons}
      </div>

      {/* Course Cards */}
      <div className="course-grid">
        {courseCards}
      </div>
      <BottomNav />
    </div>
  )
}

export default Landing