import * as ReactDOM from "react-dom";
import * as React from "react";
import { Provider } from "mobx-react";
import { addLocaleData, IntlProvider } from "react-intl";
let frLocaleData = require("react-intl/locale-data/fr");
addLocaleData(frLocaleData);
import messages from "../../assets/i18n";
import Routes from "../../routes/splitLayout";
import AppStore from "../../store";

const locale = "fr";

const i18nConfig = {
  locale: locale,
  messages: messages[locale]
};

export default class Boot {
  constructor() {
    this.boot();
  }
  boot(): any {
    ReactDOM.render(
    <IntlProvider {...i18nConfig}>
      <Provider {...AppStore}>
        <Routes />
      </Provider>
    </IntlProvider>, 
    document.getElementById("root") as HTMLElement);
  }
}
