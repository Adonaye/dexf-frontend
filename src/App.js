import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./session-components/Login";
import Home from "./home-components/Home";
import Callback from "./session-components/Callback";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route path="/twitter_callback" component={Callback} />
                    </Switch>
                </Router>
            </div >
        );
    }
}

export default App;