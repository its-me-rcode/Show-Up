import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "./app/store/configureStore";
import "semantic-ui-css/semantic.min.css";
import ScrollToTop from "./app/common/util/ScrollToTop";

const rootEl = document.getElementById("root");

const store = configureStore();

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => setTimeout(render));
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
