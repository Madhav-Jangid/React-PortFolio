import React, { useEffect } from 'react';
import './css/steps.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function StepDiv(props) {

  useEffect(() => {
    Aos.init({ duration: 700 })
  }, [])

  return (
    <div className='step'>
      {/* <div className='emptyDiv'></div>
      <div className="lineDiv">
        <div className='DownIcon' data-aos='fade-up'>{props.num}</div>
        {(parseInt(props.num) === 5) ? <div></div> : (<div className='lineok'></div>)}
        <div className='lineok'></div>
      </div> */}
      <div className="stepInfo" data-aos='fade-up'>
        <h4>{props.shortTitle}</h4>
        <h1>{props.title}</h1>
        <h3>{props.content}</h3>
        <ul>
          <li>{props.point1}</li>
          <li>{props.point2}</li>
          <li>{props.point3}</li>
        </ul>
      </div>
    </div>
  )
}
