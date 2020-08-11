import React from 'react'
import Title from '../Title'
import CartColums from './CartColums'
import CartList from './CartList'
import CartTotals from './CartTotals'

const Cart = () => {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Your Cart Items" center="true" />
            </div>
            <CartColums />
            <CartList />
            <CartTotals />
        </section>
    )
}

export default Cart
