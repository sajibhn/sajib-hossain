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
                        I&#39;m an ambitious, commercially focused website developer. I love
                        building beautiful interfaces, web apps, and everything in between!
                        I&#39;m currently seeking a role as a Frontend Developer.
                    </p>
                    <a href='/pdf/sajib-hossain-frontend-developer.pdf' download="sajib-hossain-frontend-developer.pdf" className="btn">Download CV</a>
                </div>
                <div className="right">
                    <Image src="/hero.svg" width={366} height={355} alt="hero img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
