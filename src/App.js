import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NavBar from './Components/navBar';
import HomePage from './Components/homePage';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ScrollBar from './Components/scrollBar';
import ServiceDiv from './Components/serviceDiv';
import WorkPageDiv from './Components/WorkPageDiv';
import AnimatedCursor from "react-animated-cursor"
import TwitbirdImage from './Images/TwitbirdImage.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import StepDiv from './Components/stepDiv';
import Footer from './Components/Footer';
import { Link } from 'react-scroll';
import './Components/css/HomeAbout.css';

import AllServices from './Components/AllServices'

import HomeAboutImage from './Images/HomeImage.png';
import ResumeImage from './Images/Resume.png';
import PortFolioImage from './Images/Portfolio.png';
import MusicPlayerImage from './Images/Music_Player.png';
import EPortalImage from './Images/E-Portal.png';

import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import About from './Components/About';
import ContactPage from './Components/ContactPage';
import TopSlideComponent from './Components/Slider';
import { Button } from '@mui/material';

export default function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const ServicePage = () => (
    <div className='services' id='searviceDivRoute'>
      <ServiceDiv animation="fade-right" num='01' title='Designing' content='Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.' />
      <ServiceDiv animation="fade-up" num='02' title='Development' content='Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.' />
      <ServiceDiv animation="fade-left" num='03' title='Sketching' content="Get realistic colored or black & white sketches delivered right to your doorstep, with high-quality colors and paper." />
    </div>
  );

  const ProjectPage = (props) => (
    <div className='workpage'>
      {props.topBar === 'false' ? <></> : <nav>
        <h1>Recent Projects</h1>
        <NavLink to="/projects" className='link'>
          <span className='DownIcon'><i className='bx bx-down-arrow-alt'></i></span>See all
        </NavLink>
      </nav>}
      <div>
        <WorkPageDiv
          animation="fade-up"
          link1={ResumeImage}
          title1='Resume'
          path1='https://madhav-jangid.github.io/Reseume/'

          link2={PortFolioImage}
          title2='Portfolio'
          path2='https://madhav-jangid.github.io/Portfolio/'

          link3={MusicPlayerImage}
          title3='Music-Player'
          path3='https://madhav-jangid.github.io/Music-Player/'

          link4={EPortalImage}
          title4='E-Portal'
          path4='https://madhav-jangid.github.io/E-Portal/'

          link5={TwitbirdImage}
          title5='Twitbird'
          path5='https://twitbird.vercel.app/'
        />
      </div>
    </div>
  )

  const ProcessPage = () => (
    <div className='processPage'>
      <h1 className='firstH1' data-aos='fade-up'>Your website <br />in 5 steps</h1>
      <h3 className='firstH3' data-aos='fade-up'>Our process ensures that we create a website<br /> tailored to your business needs.</h3>
      <div id='topIcon'>
        <Link smooth={true} duration={20000} to='scrollBarBottom' className='DownIcon'><i className='bx bx-down-arrow-alt'></i></Link>
      </div>
      <StepDiv shortTitle='do we match?' title='discovery call' content='Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?' point1='We get to know each other better' point2='Determine how I can best assist you' point3='Understand the goals you have for your website' num='1' />

      <StepDiv shortTitle='WE NEED A PLAN' title='CONCEPT & STRATEGY' content='Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.' point1='UX Design' point2='Wireframes' point3='Interactive Prototype' num='2' />

      <StepDiv shortTitle='some magic' title='web design' content='Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.' point1='High-end web design tailored to your brand' point2='Interactive prototype of the design' point3='' num='3' />

      <StepDiv shortTitle='more magic' title='development' content='In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.' point1='Custom framer website' point2='Modular web design systems' point3='CMS integration' num='4' />

      <StepDiv shortTitle='READY TO GO' title='WEBSITE ONBOARDING' content="In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that." point1='Personal workshop' point2='Personalized video tutorials' point3='Edit text and images directly on your website' num='5' />
    </div>
  )

  const IntroPage = (props) => {
    return (
      <div style={{ height: `${props.height}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
        <h1 className='mainHeading'>{props.h1First}<br />{props.h1Second}</h1>
        <h3 className='tempHeading'>{props.h3First}<br />{props.h3Second}</h3>
        <Link style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }} smooth={true} duration={1000} offset={-200} to={props.buttonLink} ><span className='DownIcon'><i className='bx bx-down-arrow-alt'></i></span>{props.buttonText}</Link>
      </div>
    );
  }

  const HomeAbout = () => {
    return (
      <div className="homeAbout">
        <div className="homeAboutimgContainer">
          <h1 className="mainHeading" data-aos='slide-right' data-aos-offset="300">Madhav</h1>
          <img src={HomeAboutImage} alt="Home_About_Image" />
          <h1 className="mainHeading" data-aos='slide-left' data-aos-offset="300">Jangid</h1>
        </div>
        <div className="homeAboutInfo">
          <h1 className='mainHeading'>A website that leaves <br />a lasting impression!</h1>
          <div className='homeAboutLeftPart'>
            <h3 className='tempHeading'>
              Hi, I'm Madhav Jangid - a Web Designer & Web Developer. I'm passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let's work together to bring your vision to life!
            </h3 >

            <div>
              <a href="mailto:manumadhavjangid@gmail.com" className='link'><span><MailOutlineIcon /></span></a>
              <a href="https://www.linkedin.com/in/madhav-jangid/" className='link'><span><LinkedInIcon /></span></a>
              <a href="https://www.instagram.com/0001._.jangra/" className='link'><span><InstagramIcon /></span></a>
              <a href="https://github.com/Madhav-Jangid" className='link'><span><GitHubIcon /></span></a>
            </div>
          </div >
        </div >
      </div >
    )
  }

  return (
    <Router>
      <div className='App'>


        <NavBar />
        <Routes>
          <Route path='/' element={
            <>
              <HomePage />
              <TopSlideComponent />
              <ServicePage />
              <ProjectPage />
              <ProcessPage />
              <HomeAbout />
              <Footer />
            </>
          } />
          <Route path='/about' element={
            <>
              <About />
              <Footer />
            </>
          } />
          <Route path='/resume' element={
            <div className='resumeSection'>
              <div id="resumeContainer">
                <iframe title='My Resume' src="https://docs.google.com/document/d/1HlB1qEM3KI_Y5ckd6eIrTfbYNnjMYAVHWRfUx70C8k0/preview" frameborder="0" id='myResume' ></iframe>
                <button id='resumeDownlaodButton' onClick={() => window.open("https://docs.google.com/document/d/1HlB1qEM3KI_Y5ckd6eIrTfbYNnjMYAVHWRfUx70C8k0/export?format=pdf", '_blank')}>
                  <p>Download Resume</p>
                  <FileDownloadIcon />
                </button>
              </div>
              <Footer />
            </div>
          } />
          <Route path='/services' element={
            <>
              <IntroPage
                height='100vh'
                buttonText='MY SERVICES'
                buttonLink='allServiceDivCont'
                h1First='Web development &'
                h1Second='Web Designing'
                h3First='Get you desired design and'
                h3Second='website with latest technologies'
              />
              <div className='servicePageServices'>
                <AllServices
                  id='Designing'
                  imgLink='https://framerusercontent.com/images/ClfwTvpSaw5mRTAzBuRlbbRVFXQ.jpg?scale-down-to=1024'
                  animation="fade-up"
                  num='Designing'
                  title='Transforming Your Ideas into Reality'

                  contentTitle1='CONCEPT'
                  content1="I take time to understand your business needs and audience to develop a unique concept for your website. I'll create wireframes that serve as the foundation for your site's design and functionality."

                  contentTitle2="UX / UI DESIGN"
                  content2="I'll design a user-friendly interface that is visually appealing and engages your target audience. Your website will be created to meet your brand's needs and goals while ensuring a seamless user experience."

                  contentTitle3='PROTOTYPE'
                  content3="With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences."
                />
                <AllServices
                  id='Development'
                  imgLink='https://framerusercontent.com/images/ekJump78qLmbaynQ3zQfhOoWcAU.jpg?scale-down-to=1024'
                  animation="fade-up"
                  num='Development'
                  title='Developing High-Performance Websites.'

                  contentTitle1="FRAMER"
                  content1='Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.'
                  contentTitle2="CMS INTEGRATION"
                  content2='Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.'
                  contentTitle3="WEB DESIGN SYSTEM"
                  content3='Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.'
                />
                <AllServices
                  id='Sketching'
                  imgLink='https://imgs.search.brave.com/OthU4Rg__vET5MzxJ-dZJRxB5jjFrz3yOjE5u1Zx84A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlnaXRh/bC1waG90b2dyYXBo/eS1zY2hvb2wuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEz/LzAxLzQyNTMwODc0/MDBfZmYyZjNjNTdi/Y196LmpwZz9yZXNp/emU9NjAwLDQwMCZz/c2w9MQ' animation="fade-up"
                  num='Sketching'
                  title='Transform moments into Art.'

                  contentTitle1="Share Your Vision with Me!"
                  content1="Embark on a creative journey by submitting your sketch request through our user-friendly form. Unleash your imagination, provide us with details about your idea, and together, let's transform it into a unique and personalized sketch crafted just for you"

                  contentTitle2="Crafting Your 
                Vision into Art"
                  content2="Let me transform your ideas into a visual masterpiece – where each stroke is a brushstroke of creativity, carefully tailored to reflect your unique vision."

                  contentTitle3="Excitement Unveiled"
                  content3="The moment you've been waiting for has arrived! Once your custom sketch is ready, we'll promptly notify you. Access your completed artwork securely and effortlessly, ready to be cherished or shared as you please. Your unique masterpiece is now in your hands, filled with the joy of artistic creation."
                />
              </div>
              <Footer />
            </>
          } />
          <Route path='/projects' element={
            <>
              <IntroPage
                height='70vh'
                buttonText='MY PROJECTS'
                h1First='projects'
                h1Second=''
                h3First='My latest web design projects and see how I can '
                h3Second='help to bring your ideas to life.'
              />
              <ProjectPage topBar='false' />
              <Footer />
            </>
          } />
          <Route path='/contact' element={
            <>
              <div className="routingContactPage">
                <div className='tempContactDiv1'>
                  <img src={HomeAboutImage} alt="MyImage" />
                </div>
                <div className='tempContactDiv2'>
                  <ContactPage class='contactRouting' />
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
                </div>
              </div>
              <Footer />
            </>
          } />
        </Routes>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }}
          outerStyle={{
            border: '3px solid var(--cursor-color)'
          }}
        />
      </div>
    </Router>
  )
}
