import React from 'react';
import './css/workpage.css';
import LaunchIcon from '@mui/icons-material/Launch';
export default function WorkPageDiv(props) {
  return (
    <div className='project' id='project'>
      <div data-aos={props.animation} className="frame" id="frame1">
        <div className="before">
          <a href={props.path1}><LaunchIcon /></a>
        </div>
        <img src={props.link1} alt={props.title1}/>
      </div>

      <div data-aos={props.animation} className="frame" id="frame2">
        <div className="before">
          <a href={props.path2}><LaunchIcon /></a>
        </div>
        <img src={props.link2} alt={props.title2}/>
      </div>

      <div data-aos={props.animation} className="frame" id="frame3">
        <div className="before">
          <a href={props.path3}><LaunchIcon /></a>
        </div>
        <img src={props.link3} alt={props.title3}/>
      </div>

      <div data-aos={props.animation} className="frame" id="frame4">
        <div className="before">
          <a href={props.path4}><LaunchIcon /></a>
        </div>
        <img src={props.link4} alt={props.title4}/>
      </div>

      <div data-aos={props.animation} className="frame" id="frame5">
        <div className="before">
          <a href={props.path5}><LaunchIcon /></a>
        </div>
        <img src={props.link5} alt={props.title5}/>
      </div>

    </div>
  )
}
