import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const Contact = () => {
    return (
        <section className="section contact" id='contact'>
            <h2 className="section__title">Lets Talk</h2>
            <div className="contact__container container">
                <ContactLeft />
                <ContactRight />
            </div>
        </section>
    )
}

export default Contact