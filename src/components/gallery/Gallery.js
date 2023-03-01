import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import Card from './Card'
import GalleryData from './GalleryData'
import './Gallery.css'
import Footer from '../../common/footer/Footer'

const Gallery = () => {
  return (
    <>
      <HeadTitle />

      <section className='gallery top'>
        <div className='container grid'>
            {
                GalleryData.map((value) => {
                    return <Card images={value.img} title={value.title} />
                  })
            }
            <Card />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Gallery
