// import React from 'react'
import './LandingPage.css'
import flash from './../../assets/Flash.png'
import Typewriter from 'typewriter-effect'

const LandingPage = () => {

  return (
    <div className='landing__page-container'>
      <div data-aos="fade-down" className="landing__page-image">
        <img src={flash} alt="landing__page image" className="landing-image" />
      </div>

      <div data-aos="fade-down" className="landing__page-text">
        <div className="data-aos">Got fast fingers?...</div>
        <div className="typewriter">
          <Typewriter
            options={{
              strings: ["Ready for the challenge?", "Can type fast?", "Can type correctly?", "Can type quickly?"],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      
    </div>
  )
}

export default LandingPage