import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import * as React from "react";

import Icon from "./Icon";

import Background from "./types/BackgroundPropType";
import Color from "./types/ColorPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Color, Size {
  transparent?: boolean;
  flexible?: boolean;
  barButton?: boolean;
}

const uiSize = {
  l: 40,
  m: 35,
  s: 30,
  xs: 20
};

const button: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.button;

const InputButton = button`
  background: ${(props: PropType) => {
    if (props.transparent) return "transparent";
    else return props.uiBackground ? COLORS[props.uiBackground] : COLORS[500];
  }};
  border: ${(props: PropType) => {
    if (props.transparent) return "none";
    else return "";
  }};
  color: ${(props: any) => (props.color ? COLORS[props.color] : COLORS[50])};
  width: ${(props: any) =>
    props.flexible ? "100%" : props.barButton ? "40px" : "auto"};
  height: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : props.barButton ? "35px" : "auto%"};
  border-right: ${(props: any) =>
    props.barButton ? "1px solid" + COLORS[900] : "none"};
`;

interface WrapperPropType extends PropType {
  caption?: string;
  icon?: any;
}

export default class extends React.Component<WrapperPropType, any> {
  render() {
    const { caption, icon, children, ...otherProps } = this.props;
    return (
      <InputButton {...otherProps}>
        {icon && typeof icon === "string" ? (
          <Icon name={icon} size={16} style={{ marginRight: 5 }} />
        ) : icon && typeof icon !== "string" ? (
          icon
        ) : (
          ""
        )}
        {caption ? caption : ""}
      </InputButton>
    );
  }
}
