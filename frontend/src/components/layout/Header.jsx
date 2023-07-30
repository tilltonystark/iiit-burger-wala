import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from 'react-router-dom'
import { IoFastFoodOutline } from 'react-icons/io5';
import { FiShoppingCart, FiLogIn } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import {motion} from "framer-motion";

const Header = ({ isAuthenticated = false }) => {
    return (
        <nav>
            <motion.div initial = {{x:"-100%"}} whileInView={{x:"0"}}>
                <IoFastFoodOutline />
            </motion.div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">
                    <FiShoppingCart />
                </Link>
                {/* You need to add a valid URL path or use an empty string for the last Link */}
                <Link to = {isAuthenticated ? "/me" : "/login"}>
                    {isAuthenticated ? <FaUser/> : <FiLogIn/>}
                </Link>
            </div>
        </nav>
    );
};

export default Header;
