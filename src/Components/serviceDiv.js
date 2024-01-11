import React from 'react'
import './css/service.css'
import { Link } from 'react-router-dom'
export default function serviceDiv(props) {
  return (
    <div className='serviceDivCont' data-aos={props.animation}>
      <h4>{props.num}</h4>
      <h1>{props.title}</h1>
      <h3>{props.content}</h3>
      <Link to={`/services#${props.title}`} className='link'><span className='DownIcon'><i className='bx bx-down-arrow-alt'></i></span>{props.title}</Link>
    </div>
  )
}
