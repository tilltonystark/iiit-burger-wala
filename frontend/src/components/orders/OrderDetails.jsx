import React from 'react'

const OrderDetails = () => {
    return <section className='orderdetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"lsd-jhf-xdyc"}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Satyam Gopal"}
                </p>
                <p>
                    <b>Phone No.</b>
                    {"+91 7250765232"}
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed at</b>
                    {"03-08-23"}
                </p>
                <p>
                    <b>Delivered at</b>
                    {"07-08-23"}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method</b>
                    {"Online Payment"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    {"akds93j4k302"}
                </p>
                <p>
                    <b>Payed at</b>
                    {"07-08-23"}
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    ₹{3415}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    ₹{200}
                </p>
                <p>
                    <b>Tax</b>
                    ₹{12}
                </p>
                <p>
                    <b>Total</b>
                    ₹{3415 + 200 + 12}
                </p>
            </div>
        </main>
    </section>
}

export default OrderDetails