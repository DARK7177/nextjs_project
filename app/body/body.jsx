"use client"
import React from 'react'
import './Body.css'
import Sign from './auth/sign'
import Getstarted from './getStarted/getStarted'
import Cards from './cards/cards'
import Review from './Testimonials/testimonials'
import Links from './links/links'

const BodyComponent = () => {
    return (
        <>
        <div className='container'>
            <div className='body_content'>
                <div className='inner_content'>
                    <h2>Explore your hobby or passion</h2>
                    <div className='para'>
                        <p className='text'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                        </p>
                        <p className='text'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                    </div>
                    <div className="img"><img src="./image(1).png" alt="Landing_page" /></div>
                </div>
                <div className='auth_section'>
                    <Sign />
                </div>
            </div>
            <div className='cards'>
                <Cards />
            </div>
            <div>
                <Review />
            </div>
            <div>
                <Getstarted />
            </div>
            <div >
                <Links />
            </div>
            </div>
        </>
    )
}

export default BodyComponent