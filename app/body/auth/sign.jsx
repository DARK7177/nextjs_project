"use client"
import React from 'react'
import {useRef} from 'react'


const Sign = () => {

  return (
    <>
      <div className="container">
        <div className="Heading">
          <div className="sign"><h2 onClick={()=>toggleSignIn('')}>Sign In</h2></div>
          <div className="join"><h2>Join In</h2></div>
        </div>
        <div className="content">
          <div className="continue">
            <p>Continue with google</p>
            <p>Continue with Facebook</p>
          </div>
          <div className="specialcontainer">
            <p>Or connect with</p>
          </div>
          <div className="login">
            <input type="Email" placeholder='Email'/>
            <input type='Password' placeholder='Password'/>
          </div>
          <div className='signin'>

          </div>
        </div>
      </div>
    </>
  )
}

export default Sign