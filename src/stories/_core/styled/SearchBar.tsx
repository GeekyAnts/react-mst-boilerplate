import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import * as React from "react";

import Icon from "./Icon";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  centered?: boolean;
  marginInput?: boolean;
  placeholder?: string;
  value?: any;
  onChange?: any;
  onBlur?: any;
}
const uiSize = {
  l: 35,
  s: 22
};
const input: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.input;

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

const Search = div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  display: flex;
  align-items: center;
   justify-content:center;
   width:100%;
  border-radius: 2px;
  border-bottom: 1px solid ${COLORS[400]}
`;

const Input = input`
  background: transparent;
  color: ${COLORS[300]};
  border: none; /*1px solid ${COLORS[900]};*/
  border-radius: 2px;
  height: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
  width: 90%;
  font-size: ${(props: any) => (props.uiSize === "l" ? 12 : 11)}px;
  padding: 5px 5p 5px 0;
  outline: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-left: -5px;
  text-align: ${(props: PropType) => (props.centered ? "center" : "none")};
  margin-top: ${(props: PropType) => (props.marginInput ? "20px " : "0px")};
  ::-webkit-input-placeholder {
    color: ${COLORS[400]};
    font-size: ${(props: any) => (props.uiSize === "l" ? 12 : 11)}px;
  }



`;

export default class extends React.Component<PropType, any> {
  render() {
    return (
      <Search>
        <Input {...this.props} />
        <Icon name="zoom" size={14} />
      </Search>
    );
  }
}
