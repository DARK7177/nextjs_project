import React from 'react'

const Review = () => {
  return (
    <>
        <div className="container">
            <div className="innercontainer">
                <div className='heading'><p className='heading_text'>Testimonials</p></div>
                <div className="bodycontainer"><p className='body_text'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p></div>
                <div className="person">
                    <div className="voice-review"></div>
                    <div className="profile">
                        <img src="./dp.png" alt="display picture" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Review