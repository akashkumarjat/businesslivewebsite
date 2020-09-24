import React, { Component } from 'react'
import '../Scss/Counter.scss';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Clients_counter: 0,
            Projects_counter: 0,
            Team_counter: 0,
            Comments_counter: 0,

        }
    }
    student() {
        if (this.state.Clients_counter < 502) {
            this.setState(prevState => ({
                Clients_counter: prevState.Clients_counter + 1
            }));
        }
    }


    faculty() {
        if (this.state.Projects_counter < 635) {
            this.setState(prevState => ({
                Projects_counter: prevState.Projects_counter + 1
            }));
        }
    }
    programs() {
        if (this.state.Team_counter < 36) {
            this.setState(prevState => ({
                Team_counter: prevState.Team_counter + 1
            }));
        }
    }
    year() {
        if (this.state.Comments_counter < 723) {
            this.setState(prevState => ({
                Comments_counter: prevState.Comments_counter + 1
            }));
        }
    }


    componentDidMount() {
        this.interval = setInterval(() => this.student(), 60);
        this.interval = setInterval(() => this.faculty(), 48);
        this.interval = setInterval(() => this.programs(), 850);
        this.interval = setInterval(() => this.year(), 40);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <>
                <section id ="project" className="Counter_section">
                    <div className="container">
                        <div className="row">
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 ">
                                <div className="counter_div">
                                    <div class="animated-bg">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </div>
                                    <h4>{this.state.Clients_counter}</h4>
                                    <h5>Clients</h5>
                                </div>
                            </div>

                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <div className="counter_div">
                                    <div class="animated-bg">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </div>
                                    <h4>{this.state.Projects_counter}</h4>
                                    <h5>Projects</h5>
                                </div>
                            </div>

                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <div className="counter_div">
                                    <div class="animated-bg">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </div>
                                    <h4>{this.state.Team_counter}</h4>
                                    <h5>Team Experts</h5>
                                </div>

                            </div>

                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <div className="counter_div">
                                    <div class="animated-bg">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </div>
                                    <h4>{this.state.Comments_counter}</h4>
                                    <h5>Comments</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Counter;
