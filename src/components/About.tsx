import NavBar from './NavBar'
import BottomNav from './BottomNav'
import team1 from '../graphics/Team-1.png'
import team2 from '../graphics/Team-2.png'
import team3 from '../graphics/Team-3.png'
import teamAll from '../graphics/Team-All.png'
import './About.css'

function About() {
  return (
    <div className="about-container">
      <NavBar />

      <h1 className="about-title">We've happy to help you!</h1>

      {/* Mobile: แสดง 3 รูปแยก */}
      <div className="team-mobile">
        <img src={team1} alt="Team 1" className="team-img" />
        <img src={team2} alt="Team 2" className="team-img" />
        <img src={team3} alt="Team 3" className="team-img" />
      </div>

      {/* Desktop: แสดงรูปรวม */}
      <div className="team-desktop">
        <img src={teamAll} alt="Team All" className="team-all-img" />
      </div>

      <BottomNav />
    </div>
  )
}

export default About