import React from 'react'
import '../Scss/Footer.scss';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

function Footer() {
    return (
        <>
            <section className="footer_section">
                <div className="container">
                    <div class="row  ">

                        <div class="col-lg-4  col-sm-6 footer_first_col">
                            <img class='img-fluid ' src={require('../Img/logo2.png')} alt='' />
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                        </div>

                        <div class="col-lg-3  col-sm-6 footer_contact_col">
                            <h3>Contact Us</h3>
                            <a href="#">
                                <span><i class='fas fa-map-marker-alt'></i></span>
                                <p>  Office No - 115 , Street No - 05 , NY, USA</p>
                            </a>
                            <a href="#">
                                <span><i class='fa fa-envelope-open'></i></span>
                                <p>  example@email.com</p>
                            </a>
                            <a href="#">
                                <span><i class='fa fa-volume-control-phone'></i></span>
                                <p> +1 123 - 564 - 7890</p>
                            </a>
                        </div>

                        <div class="col-lg-2  col-sm-6 footer_aboutus_col">
                            <h3>About Us </h3>
                            <ul className="menus">
                                <li><i class="fa fa-arrow-circle-o-right"></i><a href="">Home</a></li>
                                <li><i class="fa fa-arrow-circle-o-right"></i><a href="">About Us</a></li>
                                <li><i class="fa fa-arrow-circle-o-right"></i><a href="">Features</a></li>
                                <li><i class="fa fa-arrow-circle-o-right"></i><a href="">Services</a></li>
                                <li><i class="fa fa-arrow-circle-o-right"></i><a href="">Contact</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-2  col-sm-6 footer_last_col">
                            <h3>Stay With Us</h3>
                            <form>
                                <div class="footer_input-box ">
                                    <input type="Email" placeholder="Enter email" required />
                                    <button type="submit" class="button"><i class="fa fa-paper-plane newslatter_icon"></i></button>
                                </div>
                            </form>
                            <div className="social_icons">
                                <h4>Social Icon</h4>
                                <div class="social_buttons">
                                    <a href="#"><i class="fa fa-facebook-square"></i></a>
                                    <a href="#"><i class="fa fa-twitter-square"></i></a>
                                    <a href="#"><i class="fa fa-linkedin-square"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright_sec">
                        <p>© Copyright 2019 busines. All Rights Reserved Term & Condition / Privacy & Policy</p>
                    </div>
                </div>
            </section>
            <ScrollUpButton className="ak">
                <i class='fas fa-caret-up'></i>
            </ScrollUpButton>
        </>
    )
}

export default Footer