import styled, { StyledFunction } from "styled-components";
import * as React from "react";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Color from "./types/ColorPropType";
// import Size from "./types/SizePropType";

interface PropType extends Background, Color {}
const iframe: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.iframe;

const Iframe = iframe`
   background: ${(props: PropType) =>
     props.uiBackground ? COLORS[props.uiBackground] : COLORS[700]};
  width:100%;
  height:400px;
  margin:15px 0px;
  border-radius:2px;
`;

export default class extends React.Component<any, any> {
  render() {
    const {} = this.props;
    return (
      <Iframe width="100%" height="100%" frameBorder="0" {...this.props} />
    );
  }
}
