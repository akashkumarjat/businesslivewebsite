import React from 'react'
import '../Scss/BusinessSolution.scss';
import '../Scss/CommonStyle.scss';

function BusinessSolution() {
    return (
        <>
            <section id="about" className="Business_solution_section">
                <div className="container">
                    <div className="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="Business_solution_content">
                                <h1>Business Solution</h1>
                                <h3>We Gives You The Best</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown dummy text of the printing</p>
                                <h4>What we can help you Achive</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>

                                <div className="banner_button">
                                    <button className="Get_Started">
                                        hire us now<span><i class='fas fa-chevron-circle-right right-arrow'></i></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <img class='img-fluid Business_solution_img' src={require("../Img/about-img-522fb8575d8fffe0f2bada7e70867aeb.png")} alt='banner-img' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BusinessSolution
