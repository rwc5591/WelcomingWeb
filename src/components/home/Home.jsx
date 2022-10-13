import React from 'react'
import './home.css'
import { Resources } from '../../containers';

export default function Home(){
    return (
        <div className='Home' id='Home'>
            <body>Home works!
            Welcome to Welcoming Web! If you're reading this, this is our first submission so far. This is a basic template of the website.
            <p> This is where we will have our info about our mission and how to navigate this website. </p>
            </body>
            <Resources />
        </div>
    )
}