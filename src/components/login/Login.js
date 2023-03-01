import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../common/footer/Footer'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import './design.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const [recValue, setRecValue] = useState([])
    const submitForm = (e) => {
      e.preventDefault()
      const newValue = { email: email, password: password }
  
      setRecValue([...recValue, newValue])
      console.log(newValue)
  
      setEmail("")
      setPassword("")
    }
    return (
      <>
        <HeadTitle />
        <section className='forms top'>
          <div className='container'>
            <div className='sign-box'>
              <p>Enter Your E-mail and password below to Login to your account and use the benefits of our Website.</p>
              <form action='' onSubmit={submitForm}>
                <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
  
                <div className='flex_space'>
                  <div className='flex'>
                    <input type='checkbox' />
                    <label>Remember Me</label>
                  </div>
                  <div className='flex'>
                    <span>I forgot my password</span>
                  </div>
                </div>
  
                <button type='submit' className='primary-btn'>
                  Sign In
                </button>
                <p>
                  Don't have account? <Link to='/register'>Signup!</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
  
        <section className='show-data'>
          {recValue.map((cureentValue) => {
            return (
              <>
                <div className='sign-box'>
                  <h1>Sign-In Successfully</h1>
                  <h3>
                    Email : {cureentValue.email}
                  </h3>
                  <h3>
                    Password : {cureentValue.password}
                  </h3>
                </div>
              </>
            )
          })}
        </section>

        <Footer />
      </>
    )
  }

export default Login
