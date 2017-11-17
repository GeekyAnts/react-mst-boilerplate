import * as React from "react";
import AppState from "../services/AppState";

import { observer } from "mobx-react";

@observer
export default class extends React.Component<
  { appState: typeof AppState.Type },
  any
> {
  render() {
    return (
      <div>
        The name of the app is {this.props.appState.name}
        <button onClick={() => this.props.appState.changeName("asdfsfdsf")}>
          Change name
        </button>
      </div>
    );
  }
}
