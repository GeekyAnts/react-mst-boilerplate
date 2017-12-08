import * as ReactDOM from "react-dom";
import * as React from "react";
import { Provider } from "mobx-react";
import { IntlProvider } from "react-intl";
// import messages from "../../assets/i18n";
// import fr from "react-intl/locale-data/fr";
import Routes from "../../routes";
import AppStore from "../../store";
// import { addLocaleData } from "react-intl";
// addLocaleData([...fr]);

// console.log("these are messages",)
export default class Boot {
  constructor() {
    this.boot();
  }

  boot(): any {
    ReactDOM.render(
    <IntlProvider locale="en">
      <Provider {...AppStore}>
        <Routes />
      </Provider>
    </IntlProvider>, 
    document.getElementById("root") as HTMLElement);
  }
}
