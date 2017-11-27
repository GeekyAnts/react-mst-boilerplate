import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  centered?: boolean;
  marginInput?: boolean;
  rows?: any;
  cols?: any;
}
const uiSize = {
  xxl: 95,
  xl: 70,
  l: 35,
  s: 22
};
const textarea: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.textarea;

export default textarea`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : COLORS[600]};
  color: ${COLORS[300]};
  border: none;
  border-radius: 2px;
  height: ${(props: any) => (props.uiSize ? uiSize[props.uiSize] : "")}px;
  width: 100%;
  font-size: 12px;
  padding: 8px 5px;
  outline: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  resize: none;
  text-align: ${(props: PropType) => (props.centered ? "center" : "none")};
  margin: ${(props: PropType) => (props.marginInput ? "15px 0px" : "0px")};
  ::-webkit-input-placeholder {
    color: ${COLORS[400]};
    font-size: 12px
  }
`;
