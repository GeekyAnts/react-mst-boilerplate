import * as React from "react";
import * as SplitPane from "react-split-pane";
import "./index.scss";
// import COLORS from "./constants/COLORS";

export default class extends React.Component<
  ReactSplitPane.ReactSplitPaneProps,
  any
> {
  render() {
    return (
      <SplitPane
        {...this.props}
        resizerStyle={{
          backgroundColor: "none"
        }}
      />
    );
  }
}
