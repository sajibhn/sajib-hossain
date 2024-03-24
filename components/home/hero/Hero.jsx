import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__container container">
                <div className="left">
                    <h3 className="hello">Hello,</h3>
                    <h2 className="heading">
                        I am
                        <Typewriter
                            options={{
                                strings: [
                                    " Sajib Hossain",
                                    " A Web Developer",
                                    " A Football Fan",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <p className="description">
                        I&#39;m an ambitious, commercially focused, full-stack website developer. I love building beautiful interfaces, web apps, and everything in between!
                    </p>
                    <a href='https://drive.google.com/file/d/16S1JjJcwx0O80rGkl-8UcAcFPog5p4wQ/view?usp=sharing' rel="noreferrer" target="_blank" className="btn">Download CV</a>
                </div>
                <div className="right">
                    <img src="/hero.svg" alt="hero img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
