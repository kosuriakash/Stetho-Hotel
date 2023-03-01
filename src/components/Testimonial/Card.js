import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box'>
        <div className='para'>
        <i className='fa fa-quote-left'></i>
          <p>{props.desc}</p>
        </div>
        <hr />
        <div className='details flex '>
          <div className='img'>
            <img src={props.profile} alt='' />
          </div>
          <div className='name'>
            <h3>{props.name}</h3>
            <span>{props.post}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card