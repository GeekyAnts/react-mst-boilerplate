import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  centered?: boolean;
  marginInput?: boolean;
  typeFile?: boolean;
  type?: string;
}
const uiSize = {
  l: 35,
  s: 22
};
const input: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.input;

export default input`

  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : COLORS[600]};
  color: ${COLORS[300]};
  border: none; /*1px solid ${COLORS[900]};*/
  border-radius: 2px;
  height: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
  width: 100%;
  font-size: ${(props: any) => (props.uiSize === "l" ? 12 : 11)}px;
  padding: 5px;
  outline: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  text-align: ${(props: PropType) => (props.centered ? "center" : "none")};
  margin-top: ${(props: PropType) => (props.marginInput ? "20px " : "0px")};
  ::-webkit-input-placeholder {
    color: ${COLORS[400]};
    font-size: ${(props: any) => (props.uiSize === "l" ? 12 : 11)}px;
  }
  position:${(props: PropType) => (props.typeFile ? "absolute" : "relative")};
      opacity: ${(props: PropType) => (props.typeFile ? "0" : "")};
    font-size: ${(props: PropType) => (props.typeFile ? "100px" : "")};
    left: ${(props: PropType) => (props.typeFile ? "0" : "")};
    top: ${(props: PropType) => (props.typeFile ? "0" : "")};



`;
