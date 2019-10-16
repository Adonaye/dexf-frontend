import React, { Component } from "react";

class User extends Component {
    constructor(props) {
        super(props);
    }

    getStylesFromUser(user) {

    }

    render() {
        let user = this.props.getUser();
        return (
            <div className="col-12">
                <div className="jumbotron">
                    <div className="container">
                        {
                            (user)
                            ?
                            <div className="row">
                                <div className="col-12 col-md-10">
                                    <h1 className="display-3">Hello, {user.screen_name}</h1>

                                    <p className="lead">{user.followers_count} seguidores</p>
                                    <p className="lead">{user.favourites_count} favoritos</p>
                                    <p className="lead">{user.friends_count} amigos</p>
                                </div>
                                <div className="col-12 col-md-2">
                                    <img style={{ width: "100%", height: "auto" }} src={user.profile_image_url} />
                                    <button className="btn btn-danger btn-block" onClick={this.props.unlog} style={{marginTop: "1em"}}>Salir</button>
                                </div>
                            </div>
                            :
                            <h1>...Loading</h1>
                        }
                    </div>
                </div>
            </div>
        );
    };
}

export default User;