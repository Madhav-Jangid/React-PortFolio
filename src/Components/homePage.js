import React from 'react'
import './css/homePage.css';
import Image from '../Images/HomeImage.png';
import { Parallax } from 'react-parallax';
import { Link } from 'react-scroll';


export default function homePage() {
    // const image = 'https://media.istockphoto.com/id/160504918/photo/dark-night-with-moon.jpg?s=612x612&w=is&k=20&c=7eN1X6rGmOGtOUW4_JZHn2M1beJsfhMQaYa1bkYlnMU=';
    return (
        <div className='container' id='homeContainer'>
            <Parallax strength={250} bgImage={Image}>
                <div className="content">
                    <div className="textContent">
                        <h1>Web Developer</h1>
                        <h4>Premium Web Design, Development, and SEO services to help your business stand out.</h4>

                        <Link smooth={true} duration={1500} to='services'><span className='DownIcon'><i className='bx bx-down-arrow-alt'></i></span> my services</Link>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}
