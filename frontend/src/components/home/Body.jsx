import React from "react";
import Founder from "./Founder";
import Menu from "./Menu";

const Body = () => {
    return <>
        <section className="body">
            <div>
                <h1>IIIT Burger Wala</h1>
                <p>Buy yourself a tasty burger</p>
            </div>

            <a href="#menu">Explore menu</a>
        </section>
        <Menu/>
        <Founder/>
    </>
};

export default Body;