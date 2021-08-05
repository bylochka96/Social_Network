import ReactDOM from "react-dom";
import App from "./App";
import {createPost} from "./redux/state";
import {updateTextArea} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let renderTree = (props) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={props} addPost={createPost} updateTextArea={updateTextArea}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};