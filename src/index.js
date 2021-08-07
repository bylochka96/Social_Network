import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.createPost.bind(store)} updateTextArea={store.updateTextArea.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

renderTree();
store.subscribe(renderTree);