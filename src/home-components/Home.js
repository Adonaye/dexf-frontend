import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import Tweets from "../home-components/Tweets";
import User from "../home-components/User";
import SessionService from "../services/session";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }

        this.getUser = this.getUser.bind(this);
        this.unlog = this.unlog.bind(this);

        this.getSession();
    }

    getSession() {
        SessionService.connect(
            response => {
                this.setState({ user: response.data });
            },
            error => {
                console.log(error);
                this.props.history.push('/login');
            }
        );
    }

    unlog() {
        SessionService.disconnect(
            response => {
                console.log(response.data);
                this.props.history.push('/login');
            },
            error => {
                console.log(error);
            }
        );
    }
    
    getUser() {
        return this.state.user;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <User getUser={this.getUser} unlog={this.unlog} />
                </div>
                <div className="row justify-content-center">
                    <Tweets />
                </div>
            </div>
        );
    }
}

export default withRouter(Home);