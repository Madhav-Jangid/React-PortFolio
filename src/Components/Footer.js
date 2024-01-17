import React from 'react';
import './css/footer.css';
import './css/scrollBar.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { Link } from 'react-scroll';

import { NavLink } from 'react-router-dom';
import ContactPage from './ContactPage';

export default function Footer() {
    return (
        <div className='mainContainer' >
            <div className='mainScroller' id='scrollBarBottom'>
                <div className='scrollerBar'>
                    <div className="scrollerElement">++ Lets Talk ++</div>
                    <div className="scrollerElement">++ Lets Talk ++</div>
                    <div className="scrollerElement">++ Lets Talk ++</div>
                    <div className="scrollerElement">++ Lets Talk ++</div>
                    <div className="scrollerElement">++ Lets Talk ++</div>
                </div>
                <div className='scrollerBar'>
                    <div className="scrollerElement">++ Lets Talk ++</div>
                    <div className="scrollerElement">++ Lets Talk ++</div>
                    <div className="scrollerElement">++ Lets Talk ++</div>
                    <div className="scrollerElement">++ Lets Talk ++</div>
                    <div className="scrollerElement">++ Lets Talk ++</div>
                </div>
            </div>
            <div className="startupText">
                <p className='footerh3' style={{ fontSize: '15px' }} data-aos='fade-up' >PROJECT IN MIND ?</p>
                <h3 className='footerh1' data-aos='fade-up'>Lets Make your<br />Website Shine✨</h3>
                <h3 className='footerh3' data-aos='fade-up'>Premium web design, development, and SEO <br />services to help your business stand out.</h3>
                <NavLink to="/contact" className='link' data-aos='fade-up' >Get in touch <i className='bx bx-down-arrow-alt'></i></NavLink>
            </div>
            <div className="bottomdiv">
                <div className='leftContainer'>
                    <div className="SocialLogo">
                        <h1 id='madhav'>madhav.</h1>
                        <a href="mailto:manumadhavjangid@gmail.com" className='link'><span className='DownIcon'><MailOutlineIcon /></span>g-mail</a>
                        <a href="https://www.linkedin.com/in/madhav-jangid/" className='link'><span className='DownIcon'><LinkedInIcon /></span>Linkedin</a>
                        <a href="https://www.instagram.com/0001._.jangra/" className='link'><span className='DownIcon'><InstagramIcon /></span>instagram</a>
                        <a href="https://github.com/Madhav-Jangid" className='link'><span className='DownIcon'><GitHubIcon /></span>github</a>
                    </div>
                    <div className="allPages">
                        <h1>Pages</h1>
                        <NavLink to="/" className='link'>home</NavLink>
                        <NavLink to="/about" className='link'>about</NavLink>
                        <NavLink to="/services" className='link'>services</NavLink>
                        <NavLink to="/projects" className='link'>projects</NavLink>
                        <NavLink to="/contact" className='link'>contact<i className='bx bx-down-arrow-alt'></i></NavLink>
                    </div>
                </div>
                <ContactPage />
            <div className='lastFooterDiv'>
                <p>Developed By Madhav Jangid</p> 
                {/* <Link className='span' smooth={true} duration={1000} offset={-120} to='homeContainer' data-aos='fade-up'><i className='bx bx-down-arrow-alt'></i>To Top</Link>  */}
            </div>            </div>


        </div>
    )
}
