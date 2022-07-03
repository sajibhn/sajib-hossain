import React from "react";
import Typewriter from 'typewriter-effect';


const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__container container">
                <div className="left">
                    <h3 className="hello">Hello,</h3>
                    <h2 className="heading">I am
                        <Typewriter
                            options={{
                                strings: [' Sajib Hossain', ' A Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p className="description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                        delectus vero accusantium porro sapiente nemo voluptates, impedit
                        quos voluptatem voluptate, optio error itaque vel quaerat.
                    </p>
                    <button className="btn">Download CV</button>
                </div>
                <div className="right">
                    <img src="/hero.svg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
