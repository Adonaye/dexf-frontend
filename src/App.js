import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Login from "./session-components/Login";
import Home from "./home-components/Home";
import Callback from "./session-components/Callback";
import SessionService from "./services/session";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLogged: false,
            loading: true,
        }

        this.setLogged = this.setLogged.bind(this);
        this.setUnlogged = this.setUnlogged.bind(this);
        this.getUser = this.getUser.bind(this);

        SessionService.connect(
            response => {
                this.setLogged(response.data);
                // this.props.history.push('/home');
            },
            error => {
                // this.props.history.push('/login');
                console.log(error);
            },
            () => this.setState({ loading: false })
        );
    }

    setLogged(userData) {
        this.setState({ user: userData, isLogged: true });
    }

    setUnlogged() {
        this.setState({ user: null, isLogged: false });
    }

    getUser() {
        return this.state.user;
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/" 
                            render={
                                (props) => (this.state.loading) ?
                                                <p>...Loading</p> :
                                                (this.state.isLogged) ?
                                                    <Redirect to="/login" /> :
                                                    <Redirect to="home" />
                            }
                        />
                        <Route exact path="/login" component={Login} />
                        <Route path="/home" 
                            render={
                                (props) => <Home {...props} 
                                        getUser={this.getUser} 
                                        setUnlogged={this.setUnlogged}
                                />
                            }
                        />
                        <Route path="/twitter_callback" 
                            render={
                                (props) => <Callback {...props} setLogged={this.setLogged} />
                            } 
                        />
                    </Switch>
                </Router>
            </div >
        );
    }
}

export default App;