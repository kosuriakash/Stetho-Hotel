import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HeadTitle from '../common/HeadTitle/HeadTitle'
import Sdata from '../components/Destinations/Sdata'
import EmptyFile from '../common/EmptyFile/EmptyFile'
import './Singlepage.css'

const SinglePage = () => {
    const {id} = useParams()
    const [item,setItem] = useState(null)

    useEffect(() => {
      let item = Sdata.find((item) => item.id === parseInt(id))

      if(item){
        setItem(item)
      }
    }, [id])
    
  return (
    <>
      <HeadTitle />
      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/destination' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className='content flex'>
              <div className='main-content'>
                <img src={item.image} alt='' />
                <p>{item.desc}</p>

                <div className='para flex_space'>
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>
                <h1>What is the {item.title} City ?</h1>
                <p>{item.desc}</p>
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className='side-content'>
                <div className='box'>
                  <h2>How can we help you?</h2>
                  <p>{item.sidepara}</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Contact Us
                  </button>
                </div>

                <div className='box2'>
                  <p>{item.sidepara}</p>
                </div>
              </div>
              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default SinglePage
