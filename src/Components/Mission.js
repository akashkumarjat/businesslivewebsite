import React from 'react'
import '../Scss/Mission.scss';
function Mission() {
    return (
        <>
            <section id="blog" className="mission_section">

                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mission_main_heading">
                            <h3>OUR MAIN MISSIONS</h3>
                            <h1>Build Smart & Effective Management</h1>
                            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown</p>
                        </div>
                    </div>

                    {/* -----Blog Part-------- */}
                    <div className="row ">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 blogs">
                            <img className='img-fluid ' src={require("../Img/blog1.png")} alt='' />
                            <div className="mission_bottom_part">
                                <div className="mission_icon_div">
                                    <div className="mission_icon">
                                        <span><i className="far fa-lightbulb-o"></i></span>
                                    </div>
                                </div>
                                <div className="mission_content">
                                    <h5>Bussines Ideas &amp; Innovation</h5>
                                    <p>Lorem Ipsum is simply dummy text of the &amp; printing typesetting industry. Lorem Ipsum has been the industry's                standard dummy text ever since the 1500s, when an unknown</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 blogs">
                            <img className='img-fluid ' src={require("../Img/blog2.png")} alt='' />
                            <div className="mission_bottom_part">
                                <div className="mission_icon_div">
                                    <div className="mission_icon">
                                        <span><i className='fa fa-calendar-o'></i></span>
                                    </div>
                                </div>
                                <div className="mission_content">
                                    <h5> Gives Best Financial Solution</h5>
                                    <p>Lorem Ipsum is simply dummy text of the &amp; printing typesetting industry. Lorem Ipsum has been the industry's                standard dummy text ever since the 1500s, when an unknown</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 blogs">
                            <img className='img-fluid ' src={require("../Img/blog3.png")} alt='' />
                            <div className="mission_bottom_part">
                                <div className="mission_icon_div">
                                    <div className="mission_icon">
                                        <span><i className="fa fa-gavel" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <div className="mission_content">
                                    <h5>Tax Consultanct & Planning</h5>
                                    <p>Lorem Ipsum is simply dummy text of the &amp; printing typesetting industry. Lorem Ipsum has been the industry's                standard dummy text ever since the 1500s, when an unknown</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mission
