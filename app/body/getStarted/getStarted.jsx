'use client'
import React from 'react'

const GetStarted = () => {
  return (
    <>
    <div className='container'>
      <div className='text'>
        <p>Your Hobby , Your Community...</p>
      </div>
      <div className='button'><button type='submit'>Get Started</button></div>
      <div className='img'>
        <img src={require('./image1.jpg')} />
      </div>
    </div>
    </>
  )
}

export default GetStarted 