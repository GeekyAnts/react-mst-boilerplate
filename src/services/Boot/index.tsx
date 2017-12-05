import * as ReactDOM from "react-dom";
import * as React from "react";
import { Provider } from "mobx-react";
import Routes from "../../routes";
import AppStore from "../../store";

export default class Boot {
  constructor() {
    this.boot();
  }

  boot(): any {
    ReactDOM.render(
    <Provider {...AppStore}>
      <Routes />
    </Provider>, 
    document.getElementById("root") as HTMLElement);
  }
}
