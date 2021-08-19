    import store from "./redux/reduxStore";
    import ReactDOM from "react-dom";
    import {BrowserRouter} from "react-router-dom";
    import App from "./App";


    let renderTree = (props) => {
        ReactDOM.render(
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>,
            document.getElementById('root')
        );
    };

    renderTree();
    store.subscribe(renderTree);