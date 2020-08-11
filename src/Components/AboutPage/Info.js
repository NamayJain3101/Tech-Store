import React from 'react'
import Title from '../Title';
import aboutBcg from '../../Images/aboutBcg.jpeg';

const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" alt="aboutimage" style={{background: 'var(--darkGrey)'}} />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="about us" />
                        <p className="text-lead text-muted my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi, deserunt sed quibusdam perferendis sequi accusantium. Porro neque fugit illo.</p>
                        <p className="text-lead text-muted my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi, deserunt sed quibusdam perferendis sequi accusantium. Porro neque fugit illo.</p>
                        <buttom className="main-link" type="button" style={{margin: '2rem'}}>More Info</buttom>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info
