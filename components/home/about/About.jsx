import React from 'react'

const About = () => {
    return (
        <section className="section about" id='about'>
            <h2 className="section__title">About Me</h2>
            <div className="about__container container">
                <div className="about__left">
                    <img src="/about.svg" alt="" />
                </div>
                <div className="about__right">
                    <p className='about__text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum delectus vero accusantium porro sapiente nemo voluptates, impedit quos voluptatem voluptate, optio error itaque vel quaerat.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum delectus vero accusantium porro sapiente nemo voluptates, impedit quos voluptatem voluptate, optio error itaque vel quaerat.
                    </p>
                    <br />
                    <p className='about__text'>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <br />
                    <ul className="skills__list">
                        <li>Javascript (ES6+)</li>
                        <li>Javascript (ES6+)</li>
                        <li>Javascript (ES6+)</li>
                        <li>Javascript (ES6+)</li>
                        <li>Javascript (ES6+)</li>
                        <li>Javascript (ES6+)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About