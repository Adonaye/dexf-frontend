import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginUrl: "",
        };
    }

    componentDidMount() {
        var config = {
            params: {
                callbackUrl: "http://127.0.0.1:3001/callback",
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
        axios.get('http://127.0.0.1:3000/oauth_request', config).then(
            response => {
                console.log(response);
                let url = JSON.stringify(response.data);
                url = url.substr(1, url.length-2); // 
                this.setState({ loginUrl: url });
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