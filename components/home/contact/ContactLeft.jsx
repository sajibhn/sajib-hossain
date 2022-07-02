import React from 'react'

const ContactLeft = () => {
    return (
        <div className="contact__left">
            <h3>Get In Touch</h3>

            <form action="" className="form">
                <div className="form__control">
                    <label>Your Name</label>
                    <input type="text" name="name" className='form__input' autoComplete='off' />
                </div>
                <div className="form__control">
                    <label>Your Email</label>
                    <input type="email" name="name" className='form__input' autoComplete='off' />
                </div>
                <div className="form__control">
                    <label>Your Phone</label>
                    <input type="text" name="name" className='form__input' autoComplete='off' />
                </div>
                <div className="form__control">
                    <label>Message </label>
                    <textarea name="" id="" cols="30" rows="8" className='form__input' autoComplete='off'></textarea>
                </div>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default ContactLeft