import React from 'react'
import myImg from '../../assets/myPic.jpeg';

const Founder = () => {
    return (
    <div className='founder'>
        <div>
            <img src={myImg} alt="Founder Satyam Gopal" height={175} widht={150}/>
            <h3>Satyam Gopal</h3>
            <p>Satyam graduated from IIIT Ranchi and have started the company with his friends</p>
            <p>His childhood dream was to make the best burger.</p>
        </div>
    </div>
    )
}

export default Founder