import React from 'react'
import './css/workpage.css'
export default function WorkPageDiv(props) {
  return (
    <div className='project' id='project'>
      <iframe data-aos={props.animation} id='frame1' className='frame' src={props.link1} title={props.title1} frameborder="0"></iframe>
      <iframe data-aos={props.animation} id='frame2' className='frame' src={props.link2} title={props.title2} frameborder="0"></iframe>
      <iframe data-aos={props.animation} id='frame3' className='frame' src={props.link3} title={props.title3} frameborder="0"></iframe>
      <iframe data-aos={props.animation} id='frame4' className='frame' src={props.link4} title={props.title4} frameborder="0"></iframe>
    </div>
  )
}
