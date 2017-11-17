import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "../../containers/App";
import { Provider } from "mobx-react";

import AppState from "../AppState";

export default class {
  constructor(appState: typeof AppState.Type) {
    ReactDOM.render(
      <Provider appState={appState}>
        <App />
      </Provider>,
      document.getElementById("root") as HTMLElement
    );
  }
}
