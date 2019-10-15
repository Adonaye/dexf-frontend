import axios from "axios";

function connect(onSuccess, onError, onDone=()=>{}, tokens={}) {
    let options = {
        withCredentials: true
    }
    axios.post("http://127.0.0.1:3000/connect", tokens, options).then(
        response => onSuccess(response),
        error => onError(error),
    ).finally(() => onDone());
}

export default { connect };