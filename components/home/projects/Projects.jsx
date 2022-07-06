import React, { useState } from "react";

const Projects = (data) => {
    const [portfolio, setPortfolio] = useState(data)
    return (
        <section className="section projects" id="projects">
            <h2 className="section__title">Projects</h2>
            <div className="projects__container container">
                {portfolio?.data?.data?.map((item) => {
                    const { id, title, description, code, live, tech, image } = item
                    return <React.Fragment key={id}>
                        <div className="projects__data" >
                            <div className="projects__left">
                                <h2>{title}</h2>
                                <p>
                                    {description}
                                </p>
                                <div className="project__buttons">
                                    <a href={code} target="_blank" rel="noreferrer" className="btn">code</a>
                                    <a href={live} target="_blank" rel="noreferrer" className="btn">live
                                    </a>
                                </div>
                                <div className="project__tags">
                                    <p>tech used :</p>
                                    <div className="tech">
                                        {
                                            tech?.map((techItems) => {
                                                return <>
                                                    <span className="tags">{techItems}</span>
                                                </>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="projects__right">
                                <div className="scroll__img" style={{ backgroundImage: `url(${image})` }}></div>
                            </div>
                        </div>
                    </React.Fragment>
                })}
            </div>
        </section>
    );
};

export default Projects;
