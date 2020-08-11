import React from 'react'
import  contactImg from '../Images/contactBcg.jpeg';
import Hero from '../Components/Hero';
import Contact from '../Components/ContactPage/Contact';

const ContactsPage = () => {
    return (
        <>
            <Hero img={contactImg} />
            <Contact />
        </>
    )
}

export default ContactsPage
