import React from "react";
import "../Scss/Navbar.scss";


class SlidingMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"sliding-menu animated " + this.props.slideClass}>
                <button className="sliding-menu-button" type="button" onClick={this.props.onClick}>
                    {/* <span className="glyphicon glyphicon-arrow-left"></span> */}
                    <i class='fas fa-arrow-left'></i>
                </button>
                {this.props.children}
            </div>
        );
    }
}

class Navbar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state.toggleMenu);
        this.setState({ toggleMenu: !this.state.toggleMenu });
    }

    render() {
        let slideClass;
        this.state.toggleMenu
            ? slideClass = 'slideInLeft slide-menu'
            : slideClass = 'slideInRight';

        return (
            <>
                <nav class="navbar fixed-top">
                    <div className="main-container ">
                        <div className="row">
                            <div className="container">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="top-logo">
                                        <a href="/">
                                            <img className="logo1" alt="..." src={require('../Img/logo1.png')} />
                                        </a>
                                    </div>
                                    <button className="header_menus" type="button">
                                        <i class='fas fa-user-alt'></i>
                                    </button>
                                    <button className="header_menus" type="button">
                                        <i class="search_icon fa fa-search search_btn"></i>
                                    </button>
                                    <button className="header_menus" type="button" onClick={this.handleClick}>
                                        {/* <span className="glyphicon glyphicon-menu-hamburger"></span> */}
                                        <div className="home_menu_icon">
                                            <span class="btn-block"></span>
                                            <span className="menu-name">Menu</span>
                                        </div>
                                    </button>

                                    <SlidingMenu className="side_menu" slideClass={slideClass} onClick={this.handleClick}>
                                        <a href="/">Home </a>
                                        <a href="#services">SERVICE </a>
                                        <a href="#about">ABOUT </a>
                                        <a href="#blog">BLOG </a>
                                        <a href="#video">VIDEO </a>
                                        <a href="#skills">SKILLS </a>
                                        <a href="#project">PROJECT </a>
                                        <a href="#Portfolio">Portfolio </a>
                                        <a href="#testimonial">TESTIMONIAL </a>
                                        <a href="#contact">CONTACT </a>
                                    </SlidingMenu>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar