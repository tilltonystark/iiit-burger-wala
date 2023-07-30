import React from 'react'
import {AiFillInstagram, AiFillYoutube, AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
    return (
    <footer>
        <div>
            <h2>IIIT Burger Wala</h2>
            <p>We are trying to give you the best taste possible.</p>
            <strong>All rights reserved @IIITBurgerWala</strong>
        </div>
        <aside>
            <h4>Follow us</h4>
            <a href="/"> <AiFillYoutube/> YouTube</a>
            <a href="/"> <AiFillTwitterCircle/> Twitter</a>
            <a href="/"> <AiFillInstagram/> Instagram</a>
        </aside>
    </footer>
    )
}

export default Footer