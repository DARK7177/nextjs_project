import React from 'react';
import './sign.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Sign = () => {
    return (
        <div className='sign-container'>
            <div className='sign-tabs'>
                <button className='active'>Sign In</button>
                <button>Join In</button>
            </div>
            <button className='social-button google'>
                <FontAwesomeIcon icon={faGoogle} className='icon' />
                <span className='button-text'>Continue with Google</span>
            </button>
            <button className='social-button facebook'>
                <FontAwesomeIcon icon={faFacebook} className='icon' />
                <span className='button-text'>Continue with Facebook</span>
            </button>
            <div className='divider'>
                <span>Or connect with</span>
            </div>
            <form className='sign-form'>
                <div className='form-group'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type='email' placeholder='Email' />
                </div>
                <div className='form-group'>
                    <FontAwesomeIcon icon={faLock} />
                    <input type='password' placeholder='Password' />
                </div>
                <div className='options'>
                    <label>
                        <input type='checkbox' />
                        Remember me
                    </label>
                    <a href='#'>Forgot password?</a>
                </div>
                <button type='submit' className='submit-button'>Continue</button>
            </form>
        </div>
    )
}

export default Sign;
