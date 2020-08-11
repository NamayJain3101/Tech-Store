import React from 'react'
import CartSection from '../Components/CartPage'
import Hero from '../Components/Hero'
import CartBcg from '../Images/storeBcg.jpeg'

const CartPage = () => {
    return (
        <>
            <Hero img={CartBcg} />
            <CartSection />
        </>
    )
}

export default CartPage
