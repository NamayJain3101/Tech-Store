import React from 'react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import Services from '../Components/HomePage/Services'
import FeaturedProducts from '../Components/HomePage/FeaturedProducts'

const HomePage = () => {
    return (
        <>
            <Hero title="Awesome gadgets" max="true">
                <Link to='/products' className="main-link" style={{margin: '2rem'}}>
                    Our Products
                </Link>
            </Hero>
            <Services />
            <FeaturedProducts />
        </>
    )
}

export default HomePage
