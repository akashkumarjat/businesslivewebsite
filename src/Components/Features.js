import React from 'react'
import "../Scss/Features.scss";
function Features() {
    return (
        <>
            <section id="services" className="Features_section">
                <div className="Features_bg">
                    <img class='img-fluid Business_solution_img' src={require("../Img/banner-bg-b9c2a08e00981c080b506299a7d330e0.png")} alt='' />
                </div>
                <div className="container">
                    <div className="row">
                        <div class="col-lg-5 col-md-4">
                            <div className="Features_headings">
                                <h1>Business Solutions</h1>
                                <h3>We Provide The</h3>
                                <h4>Our Core Features</h4>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</p>
                                <button className="Get_Started">
                                    Explore<span><i class='fas fa-chevron-circle-right right-arrow'></i></span>
                                </button>
                                {/* <a href="" className="Explore_btn">Explore<span><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></span></a> */}
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-8 services_box_part">

                            <div class="row gx-4 gy-0" >
                                <div class="col-md-6 col-sm-6">
                                    <div class="services_box">
                                        <div className="service_icon_div">
                                            <div className="service_icon">
                                                <span><i className="fa fa-suitcase"></i></span>
                                            </div>
                                        </div>
                                        <div className="service_content">
                                            <h5>Business Strategy</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel consectetur sem, vel iaculis turpis.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 second_service_box">
                                    <div class="services_box">
                                        <div className="service_icon_div">
                                            <div className="service_icon">
                                                <span><i className="fa fa-area-chart"></i></span>
                                            </div>
                                        </div>
                                        <div className="service_content">
                                            <h5>Conduct Negotiation</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel consectetur sem, vel iaculis turpis.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6">

                                    <div class="services_box">
                                        <div className="service_icon_div">
                                            <div className="service_icon">
                                                <span><i className="fa fa-object-group"></i></span>
                                            </div>
                                        </div>
                                        <div className="service_content">
                                            <h5>Financial Analysis</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel consectetur sem, vel iaculis turpis.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-6 last_service_box">
                                    <div class="services_box">
                                        <div className="service_icon_div">
                                            <div className="service_icon">
                                                <span><i className="fa fa-trophy"></i></span>
                                            </div>
                                        </div>
                                        <div className="service_content">
                                            <h5>Great experience</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel consectetur sem, vel iaculis turpis.</p>
                                        </div>
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

export default Features
