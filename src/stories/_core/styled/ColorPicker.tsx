import styled, { StyledFunction } from "styled-components";

import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background {}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

const ColorPicker = div`
`;

const ColorArea = div`
  height: 215px;
  background: #000;
  width: 100%;
`;

const ColorBox = div`
  background: ${(props: PropType) =>
    props.uiBackground ? props.uiBackground : COLORS["A100"]};
  height: 25px;
  width: 25px
`;

const ColorBoxGroup = div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  border-top: 1px solid ${COLORS[900]};
`;

const ColorGradiantPicker = div`
  height: 215px;
  background: red;
  width: 5%;
  margin-left: 8px;
`;

interface WrapperPropType extends Background, Size {
  centered?: boolean;
}
const uiSize = {
  l: 35,
  s: 22
};
const input: StyledFunction<
  WrapperPropType & React.HTMLProps<HTMLInputElement>
> =
  styled.input;

const ColorInput = input`
background: ${(props: WrapperPropType) =>
  props.uiBackground ? COLORS[props.uiBackground] : COLORS[600]};
color: ${COLORS[300]};
border: 1px solid ${COLORS[900]};
border-radius: 2px;
height: ${(props: any) =>
  props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
width: 100%;
font-size: 10px;
padding: 5px;
outline: none;
::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
text-align: ${(props: WrapperPropType) => (props.centered ? "center" : "none")};
margin-bottom: 5px;
textarea {
  padding-left: 0
}

`;

interface OtherPropType extends Size {}

const ClrInputGroup: StyledFunction<
  OtherPropType & React.HTMLProps<HTMLDivElement>
> =
  styled.div;

const ColorInputGroup = ClrInputGroup`
display: flex;
flex: ${(props: any) => (props.uiSize ? props.uiSize : 2)};
flex-direction: column;
padding: 10px 3px
`;

const ColorPickerArea = div`
display: flex;
align-items: center;
padding: 10px 10px 0 10px;
`;

const select: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.select;

const ColorPickerDropdown = select`
width: 100%;
background: ${COLORS[600]};
color: ${COLORS[300]};
height: 22px;
border: 1px solid ${COLORS[900]};
border-radius: 2px;
font-size: 11px;
outline: none;
letter-spacing: -0.27px;
font-weight: 100;
margin-bottom: 5px
`;

const ColorPickerGroup = div`
display: flex;
justify-content: space-between;
padding: 0 7px
`;

export {
  ColorPicker,
  ColorArea,
  ColorBox,
  ColorBoxGroup,
  ColorGradiantPicker,
  ColorInput,
  ColorInputGroup,
  ColorPickerArea,
  ColorPickerDropdown,
  ColorPickerGroup
};
