import React from "react";
import Image from 'next/image'

const About = () => {
    return (
        <section className="section about" id="about">
            <h2 className="section__title">About Me</h2>
            <div className="about__container container">
                <div className="about__left">
                    <Image src="/about.svg" alt="about img" width={440} height={320} />
                </div>
                <div className="about__right">
                    <p className="about__text">
                        I was introduced to programming when I wanted to create a
                        book-selling website. However, I couldn&#39;t start my start-up, but
                        since then, I have been exploring all sorts of technologies.
                    </p>
                    <br />
                    <p className="about__text">
                        As a web developer, I enjoy bridging the gap between engineering and
                        design — combining my technical knowledge with my keen eye for
                        design to create a beautiful product. My goal is to always build
                        applications that are scalable and efficient under the hood while
                        providing engaging, pixel-perfect user experiences.
                    </p>
                    <br />
                    <p className="about__text">
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <br />
                    <ul className="skills__list">
                        <li>React JS</li>
                        <li>HTML</li>
                        <li>Javascript (ES6+)</li>
                        <li>CSS / SASS / Material UI</li>
                        <li>Next JS (familiar )</li>
                        <li>Sanity / Strapi</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
