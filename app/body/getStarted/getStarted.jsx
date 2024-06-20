'use client'
import React from 'react'
import './getStarted.css'

const GetStarted = () => {
  return (
    <>
      <div className='getstarted-container'>
        <div className='gs-text'>
          <p>Your <span className='hobby'>Hobby</span>, Your <span className='community'>Community</span>...</p>
        </div>
        <div className='gs-button'>
          <button type='gs-submit'>Get started</button>
        </div>
      <div className='gs-img'>
        <img src="./image1.jpg" />
      </div>
    </div>
    </>
  )
}

export default GetStarted 