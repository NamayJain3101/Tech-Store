import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context/Context';

const Footer = () => {
    return (
        <ProductConsumer>
            {value => {
                return (
                    <FooterWrapper>
                        <div className="container py-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="text-capitalize text-center">
                                        Copyright &copy; tect store {new Date().getFullYear()} All rights reserved
                                    </p>
                                </div>
                                <div className="col-md-6 text-center d-flex justify-content-around">
                                    {
                                        value.socialIcons.map(item => {
                                            return <a href={item.url} target='blank' key={item.id}>{item.icon}</a>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </FooterWrapper>
                );
            }}
        </ProductConsumer>
    )
}

const FooterWrapper = styled.footer`
    background: var(--darkGrey);
    color: var(--mainWhite);
    .icon {
        font-size: 1.5rem;
        color: var(--mainWhite);
        transition: var(--mainTransition);
    }
    .icon:hover {
        color: var(--primaryColor);
        cursor: pointer;
        transform: scale(1.3);
    }
`

export default Footer
