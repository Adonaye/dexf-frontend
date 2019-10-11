import React from "react";
import { withRouter } from "react-router";

class Callback extends React.Component {
    componentWillMount()  {
        let location = this.props.location;
        console.log(location);
    }

    render() {
        return (
            <p>{JSON.stringify(this.props.location, null, 2)}</p>
        );
    }
}

export default withRouter(Callback);