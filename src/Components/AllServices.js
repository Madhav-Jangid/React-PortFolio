import React from 'react';
import './css/Allservices.css'

export default function AllServices(props) {
    return (
        <div className='allServiceDivCont' id={props.id}  data-aos={props.animation}>
            <h4>{props.num}</h4>
            <h1>{props.title}</h1>
            <img src={props.imgLink} alt={props.title + `_Image`} />
            <div className="points">
                <h3 className='tempHeading'>{props.contentTitle1}</h3>
                <h3 className='tempHeading'>{props.content1}</h3>
            </div>

            <div className="points">
                <h3 className='tempHeading'>{props.contentTitle2}</h3>
                <h3 className='tempHeading'>{props.content2}</h3>
            </div>

            <div className="points">
                <h3 className='tempHeading'>{props.contentTitle3}</h3>
                <h3 className='tempHeading'>{props.content3}</h3>
            </div>
        </div>
    )
}
