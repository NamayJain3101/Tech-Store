import React from 'react'
import Title from '../Title'

const Contact = () => {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us" center />
                    <form className="mt-5" action="https://formspree.io/mvowypap" method="POST">
                        <div className="form-group">
                            <input type="text" name="firstName" className="form-control my-3" placeholder="Name"/>
                            <input type="email" name="email" className="form-control my-3" placeholder="Email"/>
                            <input type="text" name="subject" className="form-control my-3" placeholder="important!!"/>
                        </div>
                        <div className="form">
                            <textarea name="message" placeholder="Message" className="form-control my-3" rows="10" />
                        </div>
                        <div className="form-group my-3">
                            <input type="submit" value="Send" className="form-control bg-primary text-white"></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
