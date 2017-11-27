import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import * as React from "react";

import Icon from "./Icon";
import Text from "./Text";

import Background from "./types/BackgroundPropType";
import Color from "./types/ColorPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Color, Size {
  borderRadius?: boolean;
  transparent?: boolean;
  flexible?: boolean;
  barButton?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  noPadding?: boolean;
  paddingLeft?: number;
  paddingRight?: number;
  active?: boolean;
  marginBottom?: number;
  marginRight?: boolean;
  minWidth?: boolean;
  border?: boolean;
  hover?: number;
  fixed?: boolean;
  textLeft?: boolean;
  disabled?: boolean;
}

const uiSize = {
  xxl: "80px",
  xl: "60px",
  l: "40px",
  m: "35px",
  s: "30px",
  xs: "23px"
};

const button: StyledFunction<PropType & React.HTMLProps<HTMLButtonElement>> =
  styled.button;

const Button = button`
  background: ${(props: PropType) => {
    if (props.transparent) {
      if (props.active) {
        return COLORS[500];
      }
      return "transparent";
    } else if (props.active) {
      return COLORS[600];
    } else {
      return props.uiBackground ? COLORS[props.uiBackground] : COLORS[500];
    }
  }};
  border: ${(props: PropType) => {
    if (props.transparent) {
      return "none";
    } else {
      return "none";
    }
  }};
  opacity: ${(props: any) =>
    props.disabled !== undefined && props.disabled ? 0.5 : 1};
  color: ${(props: any) => (props.color ? COLORS[props.color] : COLORS[50])};
  width: ${(props: any) =>
    props.fixed
      ? "100px"
      : props.flexible ? "100%" : props.barButton ? "40px" : "auto"};
  height: ${(props: any) => (props.uiSize ? uiSize[props.uiSize] : uiSize[""])};
  border-right: ${(props: any) => "none"
  /*props.borderRight ? "1px solid" + COLORS[900] : "none"*/
};
  border-left: ${(props: any) => "none"
  /*props.borderLeft ? "1px solid" + COLORS[900] : "none"*/
};
  outline: none;
  padding: ${(props: any) => (props.noPadding ? "3px 0px" : "3px 6px")};
  border-radius: ${(props: PropType) => (props.borderRadius ? "2px" : "0px")};
  font-size: 11px;
  align-items: center;
  display: inline-flex;
  justify-content:${(props: PropType) => {
    if (props.textLeft) {
      return "flex-start";
    } else {
      return "center";
    }
  }};
  position:relative;
  
  margin-bottom: ${(props: any) =>
    props.marginBottom ? props.marginBottom + "px" : ""};
  margin-right:${(props: PropType) => {
    if (props.marginRight) {
      return "15px";
    } else {
      return "0px";
    }
  }};
  min-width:${(props: PropType) => {
    if (props.minWidth) {
      return "100px";
    } else {
      return "0px";
    }
  }};
  border:  ${(props: PropType) =>
    "none" /*{
    if (props.border) return "1px solid" + COLORS[900];
    else return "";
  }*/};
transition: all 0.3s ease 0s;
cursor: ${(props: any) =>
  props.disabled === undefined
    ? "pointer"
    : props.disabled ? "not-allowed" : "pointer"}
`;

interface WrapperPropType extends PropType {
  caption?: any;
  icon?: any;
  onClick?: any;
  disabled?: boolean;
}

export default class extends React.Component<WrapperPropType, any> {
  render() {
    const { caption, icon, children, ...otherProps } = this.props;
    return (
      <Button {...otherProps}>
        {icon && typeof icon === "string" ? (
          <Icon name={icon} size={16} />
        ) : icon && typeof icon !== "string" ? (
          icon
        ) : (
          ""
        )}
        <Text>{caption ? caption : ""}</Text>
        {children ? children : ""}
      </Button>
    );
  }
}
