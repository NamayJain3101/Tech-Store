import React from 'react'
import CartSection from '../Components/CartPage'
import Hero from '../Components/Hero'
import CartBcg from '../Images/storeBcg.jpeg'

const CartPage = (props) => {
    return (
        <>
            <Hero img={CartBcg} />
            <CartSection history={props.history} />
        </>
    )
}

export default CartPage
