import React from "react";
import { withRouter } from "react-router";
import { } from "react-router-dom";
import qs from "querystring";
import SessionService from "../services/session";

class Callback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: {},
            requestFinished: false
        };

        let location = this.props.location,
            search = location.search.substr(1),
            tokens = qs.parse(search);
        SessionService.connect(
            response => this.props.setLogged(response.data),
            error => this.setState({ success: false, error: error }),
            () => this.props.history.push('/home'),
            tokens
        );
    }

    render() {
        return (
            <p>Loading...</p>
        );
    }
}

export default withRouter(Callback);