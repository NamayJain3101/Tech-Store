import React from 'react';
import Title from '../Title';
import { ProductConsumer } from '../../Context/Context';
import Product from '../Product';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Featured products" center="true" />
                <div className="row my-5">
                    <ProductConsumer>
                        {value => {
                            const {featuredProducts} = value;
                            return featuredProducts.map(product => {
                                return <Product key={product.id} product={product}></Product>
                            })
                        }}
                    </ProductConsumer>
                </div>
                <div className="row my-5">
                    <div className="col text-center">
                        <Link to='/products' className='main-link'>Our Products</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts
