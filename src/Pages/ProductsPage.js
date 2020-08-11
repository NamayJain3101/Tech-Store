import React from 'react';
import productBcg from '../Images/productsBcg.jpeg';
import Products from '../Components/ProductsPage/Products';
import Hero from '../Components/Hero'

const ProductsPage = () => {
    return (
        <>
            <Hero img={productBcg} />
            <Products />
        </>
    )
}

export default ProductsPage
