import React from 'react'
import './About.css'

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to grow your business
          </h1>
          <p>Nestled in the Alps, this luxe hotel is next to Andermatt train station and the Nätschen ski lift.
            Featuring wood, leather and stone accents, the posh rooms offer free Wi-Fi and minibars, flat-screen 
            TVs, DVD players, built-in fireplaces and iPads.</p>
            <p>Suites have seating areas, and upgrades add whirlpool tubs and/or mountain views. There is room service.
            There's an upscale restaurant serving European and Asian 
            fare, a Japanese restaurant, a wine/cigar library. The spa area has a fitness center, yoga and a sauna. 
            Other amenities include an outdoor lounge with fires, a lobby bar with a fireplace, as well as an indoor lap 
            pool with mountain views.</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='./images/about-img-1.jpg' alt='' />
          <div className='control-btn'>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard
