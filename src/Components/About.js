import React from 'react'
import Image from '../Images/HomeImage.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-scroll';
import './css/About.css'
export default function About() {
    return (
        <div className='aboutContainer'>
            <div className="aboutFirstImage">
                <img src={Image} alt="My_Image" />
            </div>
            <div className="aboutLeftContainer">
                <div className="aboutGreet">
                    <h1 className='mainHeading' data-aos='fade-up'>Madhav<br />Jangid</h1>
                    <h3 className='tempHeading' data-aos='fade-up'>A Passionate Web developer and web Designer</h3>
                    <Link id='linkToScroll' smooth={true} duration={700}
                        offset={-120} to='aboutInfo' data-aos='fade-up'>
                        <i className='bx bx-down-arrow-alt'></i>
                        <span>About Me</span>
                    </Link>
                </div>
                <div id="aboutInfo" data-aos='fade-up'>
                    <h5 className='tempHeadin'>MADHAV JANGID</h5>
                    <h1>More About Me..</h1>
                    <p>Committed and fervent, I am currently pursuing a B.Tech degree in Computer Science with the aspiration of becoming a proficient full-stack web developer. I am actively seeking opportunities to harness my advanced programming aptitude and imaginative prowess, aiming to make meaningful contributions to dynamic and pioneering projects. <br /> <br />I am an 18-year-old currently pursuing a B.Tech degree in Computer Science and Engineering. Residing in Rampura Phul, Bathinda, I am passionate about various hobbies that enrich my life. Chess, music, and sketching are among my favorite pastimes, each offering me a unique avenue for creativity and relaxation. As a student in the field of technology, I am excited to merge my academic pursuits with my diverse interests, fostering a holistic approach to personal and professional growth.</p>
                    <div id="aboutInfoImgCont">
                        <img src={Image} alt="Persnal_Image" />
                    </div>
                </div>

                <div className="aboutSocialLogos">
                    <a href="mailto:manumadhavjangid@gmail.com" className='link'>
                        <div>
                            <span className='DownIcon'>
                                <MailOutlineIcon />
                            </span>
                            g-mail
                        </div>
                        <i className='bx bx-down-arrow-alt'></i>
                    </a>

                    <a href="https://www.instagram.com/0001._.jangra/" className='link'>
                        <div>
                            <span className='DownIcon'>
                                <InstagramIcon />
                            </span>
                            Instagram
                        </div>
                        <i className='bx bx-down-arrow-alt'></i>
                    </a>

                    <a href="https://www.linkedin.com/in/madhav-jangid/" className='link'>
                        <div>
                            <span className='DownIcon'>
                                <LinkedInIcon />
                            </span>
                            linkedin
                        </div>
                        <i className='bx bx-down-arrow-alt'></i>
                    </a>

                    <a href="https://github.com/Madhav-Jangid" className='link'>
                        <div>
                            <span className='DownIcon'>
                                <GitHubIcon />
                            </span>
                            github
                        </div>
                        <i className='bx bx-down-arrow-alt'></i>
                    </a>
                </div>

                <div className="aboutQualifications">
                    <h5>Qualifiactions</h5>
                    <div className="aboutSlide">
                        <h3>Persuing Btech in (CSE)</h3>
                        <span>2022-2026</span>
                    </div>
                    <div className="aboutSlide">
                        <h3>Completed 12th from Govt. sr. sec. school</h3>
                        <span>2021-2022</span>
                    </div>
                </div>
            </div>  
        </div>
    )
}
