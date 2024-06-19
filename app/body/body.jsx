import React from 'react'
import './Body.css'

const BodyComponent = () => {
    return (
        <>
            <div className='body_content'>
                <div className='inner_content'>
                    <h2>Explore your hobby or passion</h2>
                    <div className='para'>
                        <p className='text'>Sign-in to intreact with a community of fellow hobbyists and exo-system of experts,teachers,suppliers,classes, workshops and places to practice,participate or perform. Your hobby may be about visual or performing arts,sports,games,gardening,model making,cooking,indoor or outdoor activities...</p>
                        <p className='text'>If you are an expert or a seller ,you can Add your Listing and promote yourself, your students, products, services and events. Hop on your hobbyHorse and enjoy your ride.</p>
                    </div>
                </div>
                <div className='auth_section'>
                    <h3>Sign In</h3>
                    <h3>Join In</h3>
                </div>
            </div>
        </>
    )
}

export default BodyComponent