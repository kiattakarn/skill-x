import React from 'react'

import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import BottomNav from './BottomNav'
import chatImg from '../graphics/chat.png'
import './Chat.css'

function Chat() {
  return (
    <div className="chat-container">
      <NavBar />
      <div className="chat-content">
        <img src={chatImg} alt="chat" className="chat-img" />
        <h2>Coming Soon</h2>
        <p>ฟีเจอร์ Chat กำลังจะมาเร็วๆ นี้</p>
      </div>
      <BottomNav />
    </div>
  )
}

export default Chat