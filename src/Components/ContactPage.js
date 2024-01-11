import React from 'react'
import './css/footer.css';
import './css/contactRouting.css'

export default function ContactPage(props) {
    return (
        <div className={`form ${props.class}`}>
            <h3 className='tempHeading'>Contact</h3>
            <span>Let's get in touch</span>
            <input type="text" placeholder="What's your Good Name.." name="Name" id="nameOfUser" />
            <input type="text" placeholder='How can i reach to you..' name="Email" id="emailOfUser" />
            <input type="text" placeholder='Your Message..' name="Message" id="messageOfUser" />
            <button id='SendMessage'>Send<i className='bx bx-down-arrow-alt'></i></button>
        </div>
    )
}
