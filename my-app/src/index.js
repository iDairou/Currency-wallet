import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/localStorageReducer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
