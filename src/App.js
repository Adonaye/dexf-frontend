import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./session-components/Login";
import Home from "./home-components/Home";
import Callback from "./session-components/Callback";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        var session = sessionStorage.getItem('session');
        this.state = {
            isLogged: (session) ? true : false
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Route exact path="/" component={(this.state.isLogged) ? Home : Login} />
                    <Route path="/twitter_callback" component={Callback} />
                </Router>
            </div >
        );
    }
}

export default App;