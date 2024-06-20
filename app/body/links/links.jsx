import React from 'react';
import './links.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest, faGoogle, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Links = () => {
    return (
        <>
            <div className='links-container'>
                <div className="links-innercontainer">
                    <div className="info">
                        <h3>Hobbycue</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>Work with Us</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="help">
                        <h3>How Do I</h3>
                        <ul>
                            <li>Sign Up</li>
                            <li>Add a Listing</li>
                            <li>Claim Listing</li>
                            <li>Post a Query</li>
                            <li>Add a Blog Post</li>
                            <li>Other Queries</li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Listings</li>
                            <li>Blog Posts</li>
                            <li>Shop / Store</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className="social">
                        <div className='social_handle'>
                            <h3>Social Media</h3>
                            <ul className="social_icons">
                                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faGoogle} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTelegram} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                        </div>
                        <div className='invite'>
                            <h3>Invite Friends</h3>
                            <div className="invitemail">
                                <input type="email" placeholder="Email ID" />
                                <button>Invite</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="innercontainer2">
                    <p>© Purple Cues Private Limited</p>
                </div>
            </div>
        </>
    );
}

export default Links;
