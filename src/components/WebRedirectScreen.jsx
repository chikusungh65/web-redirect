import React from 'react';
import './WebRedirectScreen.css'
import redirect from '../images/redirect.png';

const WebRedirectScreen = () => {
    return (
        <div className='outerContainer'>
            <div className='imageContainer'>
                <img
                    src={redirect}
                    alt="A girl standing in front of a computer wearing headphone with a tab in her hand."
                    className='topImage'
                />
            </div>
            <div className='messageContainer'>
                <h1 className='greeting'>Hi !</h1>
                <p className='homeMessage'>We have a new home...</p>
                <p className='clickMeMessage'>Please Click to visit</p>
                <a
                    href='https://mycare.dev.skytelservices.com/'
                    target='_blank'
                    rel="noreferrer"
                    className='link'
                >
                    https://mycare.dev.skytelservices.com/
                </a>
            </div>
        </div>
    )
}

export default WebRedirectScreen