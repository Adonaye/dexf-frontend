import axios from "axios";

function getUserTweets(onSuccess, onError, onDone=()=>{}) {
    let options = {
        withCredentials: true
    }
    axios.get("http://127.0.0.1:3000/tweets", options).then(
        response => onSuccess(response),
        error => onError(error),
    ).finally(() => onDone());
}

export default { getUserTweets };