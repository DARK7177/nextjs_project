import React from 'react'
import './cards.css'

const Cards = () => {
    return (
        <>
            <div className='cardscontainer'>
                <div className="inbuild">
                    <div className="boxes1">
                        <div className='box'>
                            <p className='headings'>People</p>
                            <p className='content'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                            <button className='btn'>Connect</button>
                        </div>
                        <div className='box'>
                            <p className="headings">Product</p>
                            <p className='content'>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                            <button className='btn'>Get it</button>
                        </div></div>
                    <div className="boxes2">
                        <div className='box'>
                            <p className="headings">Place</p>
                            <p className='content'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                            <button className='btn'>Meet Up</button>
                        </div>
                        <div className='box'>
                            <p className='headings'>Programs</p>
                            <p className='content'>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                            <button className="btn">Attend</button>
                        </div></div>
                </div>
                <div className="custom">
                    <div className="custom_container">
                    <p className='customHead'>Add your Own </p>
                    <p>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                    <button className="btn" type ="button">Add new</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards