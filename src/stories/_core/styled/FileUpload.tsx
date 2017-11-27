import styled, { StyledFunction } from "styled-components";
// import COLORS from "./constants/COLORS";
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
  l: 100,
  m: 35,
  s: 20,
  xs: 15
};
const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

const FileUpload = div`
position:relative;
display: flex;
`;
const input: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.input;

const Input = input`
    opacity:0;
    width:${(props: PropType) =>
      props.uiSize ? uiSize[props.uiSize] + "px" : "auto"};
`;

interface WrapperPropType extends PropType {
  caption?: any;
  icon?: any;
  onClick?: any;
  onChange?: any;
  disabled?: boolean;
}

export default class extends React.Component<WrapperPropType, any> {
  render() {
    const { caption, icon } = this.props;
    return (
      <FileUpload>
        <div
          style={{
            position: "absolute",
            display: "flex"
          }}
        >
          {icon && typeof icon === "string" ? (
            <Icon name={icon} size={16} />
          ) : icon && typeof icon !== "string" ? (
            icon
          ) : (
            ""
          )}
          <Text>{caption ? caption : ""}</Text>
        </div>
        <Input type="file" {...this.props} />
      </FileUpload>
    );
  }
}
