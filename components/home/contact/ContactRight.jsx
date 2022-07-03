import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { DiGithubAlt } from 'react-icons/di'

const ContactRight = () => {
    return (
        <div className="contact__right">
            <div className="info">
                <h3>Contact Info</h3>
                <div>
                    <p>sajibhossain1185@gmail.com</p>
                    <p>+8801782651286</p>
                </div>
            </div>
            <div className='social__media'>
                <h3>social media</h3>
                <div>
                    <a href="https://www.linkedin.com/in/sajibhn/" target="_blank" rel='noreferrer' className="social__link">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://twitter.com/sajib_hsn" target="_blank" rel='noreferrer' className="social__link">
                        <AiOutlineTwitter />
                    </a>
                    <a href="https://github.com/sajibhn" target="_blank" rel='noreferrer' className="social__link">
                        <DiGithubAlt />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactRight