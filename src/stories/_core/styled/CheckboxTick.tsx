import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import * as React from "react";
import Size from "./types/SizePropType";

interface PropType extends Size {
  transparent?: boolean;
  flexible?: boolean;
  barButton?: boolean;
}
const uiSize = {
  l: 16,
  m: 13,
  s: 12,
  xs: 11
};
const input: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.input;

const Checkbox = input`
        position: relative;
        left: 0; 
        top: 0;
        margin:0px;
        width: ${(props: PropType) =>
          props.uiSize ? uiSize[props.uiSize] : 13}px;
        height: ${(props: PropType) =>
          props.uiSize ? uiSize[props.uiSize] - 1 : 12}px;
        border-radius: 2px;
        border: 1px solid ${COLORS["A400"]};
        cursor: ${(props: any) =>
          props.disabled !== undefined && props.disabled
            ? "not-allowed"
            : "pointer"}
        outline:none;
        -webkit-appearance: none;
        opacity: ${(props: any) =>
          props.disabled !== undefined && props.disabled ? 0.5 : 1};
        :checked:after {
          content: '✔';
          position: absolute;
          width: ${(props: PropType) =>
            props.uiSize ? uiSize[props.uiSize] - 3 : 11}px;
          height: ${(props: PropType) =>
            props.uiSize ? uiSize[props.uiSize] - 3 : 10}px;
          line-height: 1.1;
          background-color: ${COLORS["A400"]};
          color: ${COLORS[900]};
        }
    `;

interface WrapperPropType extends PropType {
  checked?: boolean;
  onBlur?: (e: any) => void;
  onClick?: (e: any) => void;
  disabled?: boolean;
}
export default class extends React.Component<WrapperPropType, any> {
  render() {
    const { checked } = this.props;
    return <Checkbox type="checkbox" checked={checked} {...this.props} />;
  }
}
