import React from 'react'
import '../Scss/Portfolio.scss';

function Portfolio() {
    return (
        <>
            <section id="Portfolio" className="Portfolio_section">
                <div className="container">
                    <div className="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-10 portfolio_main_heading">
                            <h3>Portfolio</h3>
                            <h2>See Our Case Studies</h2>
                            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown</p>
                        </div>
                    </div>




                    <div className="row Portfolio_img_sec">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                            <div class="portfolio_img">
                                <img class='img-fluid ' src={require("../Img/portfolio1.png")} alt='' />
                                <div class='img-overlay'></div>
                                <div className="img_content">
                                    <h2>Advertising & Internet</h2>
                                    <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                            <div class="portfolio_img">
                                <img class='img-fluid ' src={require("../Img/portfolio2.png")} alt='' />
                                <div class='img-overlay'></div>
                                <div className="img_content">
                                    <h2>Differentiate Yourself</h2>
                                    <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                            <div class="portfolio_img">
                                <img class='img-fluid ' src={require("../Img/portfolio3.png")} alt='' />
                                <div class='img-overlay'></div>
                                <div className="img_content">
                                    <h2>Trade Show Promotions</h2>
                                    <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                            <div class="portfolio_img">
                                <img class='img-fluid ' src={require("../Img/portfolio4.png")} alt='' />
                                <div class='img-overlay'></div>
                                <div className="img_content">
                                    <h2>Social Media Management</h2>
                                    <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                            <div class="portfolio_img">
                                <img class='img-fluid ' src={require("../Img/portfolio5.png")} alt='' />
                                <div class='img-overlay'></div>
                                <div className="img_content">
                                    <h2>Lorem Ipsum Dolor Sit</h2>
                                    <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                            <div class="portfolio_img">
                                <img class='img-fluid ' src={require("../Img/portfolio6.png")} alt='' />
                                <div class='img-overlay'></div>
                                <div className="img_content">
                                    <h2>Business Accounting Wealth</h2>
                                    <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio


