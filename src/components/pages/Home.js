import React from 'react'
import Footer from '../../common/footer/Footer'
import DestinationHome from '../Homesection/Destina/DestinationHome'
import MostPopular from '../Homesection/Destina/popular/MostPopular'
import Download from '../Homesection/Download/Download'
import Gallery from '../Homesection/gallery/Gallery'
import Hero from '../Homesection/Hero'
import HomeAbout from '../Homesection/HomeAbout'
import Works from '../Homesection/work/Works'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <MostPopular />
      <DestinationHome />
      <Download />
      <Works />
      <Gallery />
      <Footer />
    </>
  )
}

export default Home
