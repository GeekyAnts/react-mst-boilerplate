import * as React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import { storiesOf } from "@storybook/react";

//import Home from "./routes/Home";

class Home extends React.Component {
  render() {
    return <h1>asasdasd</h1>;
  }
}

storiesOf("Home", module).add("to Storybook", () => <Home />);
