import React from 'react'
import '../Scss/Skill.scss';
function Skill() {
    return (
        <>
            <section id="skills" className="skill_section">
                <div className="container">
                    <div className="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <img class='img-fluid skill_img' src={require("../Img/skills-img.png")} alt='banner-img' />
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 skill_content">
                            <h2>We Lead From The Front</h2>
                            <h3>What We Do</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown dummy text of the printing
                            </p>
                            <div className="skills_bar">
                                <h4>Our Best Skill</h4>
                                <div>
                                    <h5>Strategies</h5>
                                    <div class="progress">
                                        <div class="progress-bar Strategies_bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div>
                                    <h5>Planning</h5>
                                    <div class="progress">
                                        <div class="progress-bar Planning_bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div>
                                    <h5>Customer Support</h5>
                                    <div class="progress">
                                        <div class="progress-bar Customer_Support_bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <div>
                                    <h5>Finance</h5>
                                    <div class="progress">
                                        <div class="progress-bar Finance_bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill
