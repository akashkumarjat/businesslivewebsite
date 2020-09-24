import React from 'react'
import "../../src/Scss/Home.scss";
import '../../src/Scss/HomeBgImg.scss';
function Home() {
    return (
        <>
            <div id="index" className="Background_img">
                <div className="home_page_bg_img">
                    <img class='img-fluid bg-img-1' src={require("../Img/1.png")} alt='' />
                    <img class='img-fluid bg-img-2' src={require("../Img/2.png")} alt='' />
                    <img class='img-fluid bg-img-3' src={require("../Img/3.png")} alt='' />
                    <img class='img-fluid bg-img-4' src={require("../Img/4.png")} alt='' />
                    <img class='img-fluid bg-img-5' src={require("../Img/5.png")} alt='' />
                    <img class='img-fluid bg-img-6' src={require("../Img/6.png")} alt='' />
                    <img class='img-fluid bg-img-7' src={require("../Img/7.png")} alt='' />
                    <img class='img-fluid bg-img-8' src={require("../Img/8.png")} alt='' />
                </div>
                <div className="container banner ">
                    <div class="row  ">
                        {/* ---------- Content Col ----------*/}
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="content_div">
                                <h1>WE ARE CREATIVE<br /> BUSINESS AGENCY</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>

                                <div className="banner_button">
                                    <button className="Learn_more">
                                        Learn More
                                    </button>
                                    <button className="Get_Started">
                                        Get Started<span><i class='fas fa-chevron-circle-right right-arrow'></i></span>
                                    </button>

                                </div>
                            </div>
                        </div>
                        {/* ---------- Image Col ----------*/}
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="Image_div">
                                <img class='img-fluid ' src={require("../Img/bannerimg-7619177a0d2dd908b2c81557dd400626.png")} alt='banner-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home