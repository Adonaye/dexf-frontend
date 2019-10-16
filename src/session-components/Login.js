import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginUrl: "#",
            loginError: false,
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
                this.setState({ 
                    loginUrl: response.data.authorizeUrl,
                });
            },
            error => {
                console.log(error);
                this.setState({ loginError: true });
            }
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{height: "50vh"}}>
                    <div className="col-6">
                        <div className="jumbotron">
                            <h1 className="display-4">Dexf App</h1>
                            <p>Twitter technical assessment</p>
                            <hr className="my-4" />
                            <a className="btn btn-primary" role="button" href={this.state.loginUrl}>
                                <i className="fa fa-twitter"></i> Login with Twitter
                            </a>
                        </div>
                        <div className="alert alert-danger" role="alert" hidden={!this.state.loginError}>
                            <strong>Error al conectar con el servidor.</strong> Intentelo nuevamente.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;