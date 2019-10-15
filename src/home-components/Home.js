import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.getUser(),
        }
    }

    /* setUnlogged() {
        this.props.setUnlogged();
    } */
    
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>{JSON.stringify(this.props.getUser())}</p>
            </div>
        );
    }
}

export default withRouter(Home);