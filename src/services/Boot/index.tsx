import * as ReactDOM from "react-dom";
import * as React from "react";
import { Provider } from "mobx-react";
import { addLocaleData, IntlProvider } from "react-intl";
let frLocaleData = require("react-intl/locale-data/fr");
addLocaleData(frLocaleData);
// import messages from "../../assets/i18n";
// import fr from "react-intl/locale-data/fr";
import Routes from "../../routes";
import AppStore from "../../store";
// import { addLocaleData } from "react-intl";
// addLocaleData([...fr]);
const i18nConfig = {
  locale: "fr",
  messages: {
    "app.welcome": "Bienvenue !",
    "app.greeting_message": "Salut {name}, ça va ?"
  }
};

// console.log("these are messages",)
export default class Boot {
  constructor() {
    this.boot();
  }

  boot(): any {
    ReactDOM.render(
    <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}>
      <Provider {...AppStore}>
        <Routes />
      </Provider>
    </IntlProvider>, 
    document.getElementById("root") as HTMLElement);
  }
}
