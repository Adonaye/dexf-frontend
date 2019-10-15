import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginUrl: "",
        };

        var config = {
            params: {
                callbackUrl: "http://127.0.0.1:3001/twitter_callback",
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
        axios.get('http://127.0.0.1:3000/oauth_request', config).then(
            response => {
                this.setState({ loginUrl: response.data.authorizeUrl });
            }
        );
    }

    render() {
        return (
            <div>
                <a href={this.state.loginUrl}>Link</a>
            </div>
        );
    }
}

export default Login;