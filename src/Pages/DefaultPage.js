import React from 'react'
import defaultBcg from '../Images/defaultBcg.jpeg'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'

const DefaultPage = () => {
    return (
        <>
            <Hero img={defaultBcg} title="Error 404" max>
                <h2 className="text-uppercase">Page not found</h2>
                <Link to='/' className="main-link" style={{margin: '2rem'}}>Back to Home</Link>
            </Hero>
        </>
    )
}

export default DefaultPage
