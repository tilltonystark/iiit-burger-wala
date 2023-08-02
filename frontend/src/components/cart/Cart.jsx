import React from 'react'
import Burger2 from '../../assets/burger2.png'
import Burger3 from '../../assets/burger3.jpeg'
import Burger4 from '../../assets/burger4.jpeg'
import { Link } from 'react-router-dom'


const CartItem = ({value, title, img, increament, decreament}) => (
    <div className="cartItem">
        <div>
            <img src={img} alt="burger-item" />
            <h4>{title}</h4>
        </div>

        <div>
            <button onClick={decreament}>-</button>
            <input type="number" readOnly value={value}/>
            <button onClick={increament}>+</button>
        </div>
    </div>

)

const Cart = () => {

    const increament = (item) => {};
    const decreament = (item) => {};

    return <section className='cart'>
        <main>
            <CartItem title={"Chess Burger"} img={Burger2} value={0} increament={() => increament(1)} decreament={() => decreament(1)}/>
            <CartItem title={"Paneer Burger"} img={Burger3} value={0} increament={() => increament(2)} decreament={() => decreament(2)}/>
            <CartItem title={"Chicken Burger"} img={Burger4} value={0} increament={() => increament(3)} decreament={() => decreament(3)}/>

            <article>
                <div>
                    <h4>Sub Total</h4>
                    <p>₹{2000}</p>
                </div>
                <div>
                    <h4>Tax</h4>
                    <p>₹{2000*0.18}</p>
                </div>
                <div>
                    <h4>Shipping Charges</h4>
                    <p>₹{80}</p>
                </div>
                <div>
                    <h4>Total</h4>
                    <p>₹{2000 + 2000*0.18 + 80}</p>
                </div>
                <Link to="/shipping">Checkout</Link>
            </article>
        </main>

    </section>
}

export default Cart