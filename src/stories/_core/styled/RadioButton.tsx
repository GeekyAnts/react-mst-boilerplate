import styled, { StyledFunction } from "styled-components";
import * as React from "react";
// import COLORS from "./constants/COLORS";
import Size from "./types/SizePropType";

interface PropType extends Size {
  transparent?: boolean;
  flexible?: boolean;
  barButton?: boolean;
}
// const uiSize = {
//   l: 16,
//   m: 13,
//   s: 12,
//   xs: 11
// };
const input: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.input;

const RadioButton = input``;

interface WrapperPropType extends PropType {
  checked?: boolean;
  onBlur?: (e: any) => void;
  onClick?: (e: any) => void;
  value?: string;
  name?: string;
}
export default class extends React.Component<WrapperPropType, any> {
  render() {
    const { checked } = this.props;
    return <RadioButton type="radio" checked={checked} {...this.props} />;
  }
}
