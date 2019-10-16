import React, { Component } from "react";
import TweetsService from "../services/tweets";

class Tweets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
        }

        this.getTweets();
    }

    getTweets() {
        TweetsService.getUserTweets(
            response => {
                this.setState({ tweets: response.data });
            },
            error => console.log(error)
        );
    }

    render() {
        return(
            <div className="col-12 col-lg-8">
                <h2 className="display-4">Tweets</h2>
                <ul className="list-group">
                    {
                        this.state.tweets.map((tweet, index) =>
                            <li key={index} className="list-group-item">
                                {tweet.text}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Tweets;