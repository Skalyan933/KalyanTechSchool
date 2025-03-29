import React from 'react'
import { useNavigate } from 'react-router-dom'
import ".//MyCourses.css";

const MyCourses = () => {
  const navigate = useNavigate();  // Use React Router for navigation

  return (
    <div className='myCourses_main'>
        <h1>Your Courses</h1>
        <div className='coursesCards'>
          <div className='courseCard'>
              <img src='https://d2b98ifobtd07j.cloudfront.net/n_java.png' alt='java' />
              <h2>Java - Backend Developer</h2>
              <button onClick={() => navigate('/Learn')}>Learn</button>
              <button onClick={() => navigate('/jobPortal')}>Job Notifications</button>
          </div>

          <div className='courseCard'>
              <img src='https://d2b98ifobtd07j.cloudfront.net/n_java.png' alt='java' />
              <h2>Java - Backend Developer</h2>
              <button onClick={() => navigate('/Learn')}>Learn</button>
              <button onClick={() => navigate('/jobPortal')}>Job Notifications</button>
          </div>
        </div>
    </div>
  )
}

export default MyCourses
