import * as ReactDOM from "react-dom";
import * as React from "react";
import Routes from "../../routes";

export default class Boot {
  constructor() {
    this.boot();
  }

  boot(): any {
    ReactDOM.render(<Routes />, document.getElementById("root") as HTMLElement);
  }
}
