import React from 'react'
import MenuCard from './MenuCard'
// import Burger1 from '../../assets/burger1.png'
import Burger2 from '../../assets/burger2.png'
import Burger3 from '../../assets/burger3.jpeg'
import Burger4 from '../../assets/burger4.jpeg'

const Menu = () => {

    const addToCartHandler = (itemNum) => {

    }
    return (
    <section id='menu'>
        <h3>Menu</h3>
        <div>
            <MenuCard itemNum={1} burgerSrc={Burger4} price={800} title={"Cheese Burger"} handler={addToCartHandler}/>
            <MenuCard itemNum={2} burgerSrc={Burger2} price={1200} title={"Paneer Burger"} handler={addToCartHandler}/>
            <MenuCard itemNum={3} burgerSrc={Burger3} price={1600} title={"Chicken Burger"} handler={addToCartHandler}/>
        </div>
    </section>
    )
}

export default Menu

