import React from 'react'
import '../Scss/Testimonial.scss';
import { Carousel } from 'antd';

export default function Testimonial() {
    return (
        <>
            <section id="testimonial" className="Testimonial_section">
                <div className="container">
                    <div className="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-10 testimonial_main_heading">
                            <h3>TESTIMONIAL</h3>
                            <h2>Clients Feedback</h2>
                            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown</p>
                        </div>
                    </div>

                    <div class="testimonial_slider_part">
                        <div class="people_images">
                            <img className="img-fluid people" alt="..." src={require('../Img/testimonial1.png')} />
                            <img className="img-fluid people" alt="..." src={require('../Img/testimonial2.png')} />
                            <img className="img-fluid people" alt="..." src={require('../Img/testimonial3.png')} />
                            <img className="img-fluid people" alt="..." src={require('../Img/testimonial4.png')} />
                            <img className="img-fluid people" alt="..." src={require('../Img/testimonial5.png')} />
                            <img className="img-fluid people" alt="..." src={require('../Img/testimonial6.png')} />
                        </div>
                        <div class="container">
                            <div class="inner-container">
                                <div class="main-content">
                                    <div class="animated-bg"><i></i><i></i><i></i></div>
                                    <Carousel autoplay>
                                        <div>
                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                            <h6 class="name">John One</h6>
                                            <span class="designation">client of example project</span>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                            <h6 class="name">Innovatory two</h6>
                                            <span class="designation">Wed Censtoriya</span>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                            <h6 class="name">john three</h6>
                                            <span class="designation">client of example project</span>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                            <h6 class="name">John four</h6>
                                            <span class="designation">client of example project</span>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                            <h6 class="name">John five</h6>
                                            <span class="designation">client of example project</span>
                                        </div>
                                        <div>
                                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                            <h6 class="name">John six</h6>
                                            <span class="designation">client of example project</span>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
