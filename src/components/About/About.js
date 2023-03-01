import React from 'react'
import Footer from '../../common/footer/Footer'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <>
    <HeadTitle />
      <section className='about top'>
        <div className='container'>
        <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Features</span>
            </h1>
            <p>The 5-star hotel Chedi Andermatt will captivate and move you with its authenticity and unusual liaison of Alpine chic and Asian expression. 
                Whether you come for the world-class skiing and natural beauty, or simply to relax and unwind in an exceptional luxury hotel in Switzerland,
                you will enjoy the ultimate Alpine experiences here at any time of the year.</p>
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='./images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
