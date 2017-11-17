import * as React from "react";
import { inject } from "mobx-react";
import AppName from "../components/AppName";

@inject("appState")
export default class extends React.Component<any, any> {
  render(): any {
    return <AppName appState={this.props.appState} />;
  }
}
