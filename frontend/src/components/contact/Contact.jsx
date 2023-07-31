import React from 'react'

const Contact = () => {
    return <section className='contact'>
        <div className="heading">
            <h2>Contact Us</h2>
        </div>
        <div className="form">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email'/>
            <textarea placeholder='Message' cols="30" rows="10"></textarea>
            <button type='submit'>Send</button>
        </div>
    </section>
}

export default Contact