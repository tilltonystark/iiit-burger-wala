import React from 'react';
import me from './../../assets/myPic.jpeg';
import { Link } from 'react-router-dom';

const Profile = () => {
    return <section className='profile'>
        <main>
            <img src={me} alt="my picture" />
            <h5>Satyam Gopal</h5>
            <div> 
                <Link to="/admin/dashboard">Dashboard</Link>
            </div>
            <div> 
                <Link to="/myorders">Orders</Link>
            </div>
            <button>Log out</button>
        </main>
    </section>
}

export default Profile