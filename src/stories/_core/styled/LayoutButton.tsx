import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import * as React from "react";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {
  selected?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
  disabled?: boolean;
  onClick?: any;
}

const button: StyledFunction<PropType & React.HTMLProps<HTMLButtonElement>> =
  styled.button;

const Layout = button`
  background: ${(props: PropType) =>
    props.selected ? COLORS[700] : COLORS[600]};
  height: 68px;
  width: 100%;
  border: 1px solid ${COLORS[900]};
  border-radius: 2px;
  padding: 0px 3px;
  outline: none;
  cursor: ${(props: any) =>
    props.disabled === undefined
      ? "pointer"
      : props.disabled ? "not-allowed" : "pointer"}
`;

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

const Box = div`;
height: 52px;
width: auto;
border: 1px dashed ${COLORS[300]};
border-radius: 3px;
margin: 0px 8px;
`;

const DashedLine = div`;
height: ${(props: PropType) => (props.vertical ? "50px" : "1px")};
border-bottom: ${(props: PropType) =>
  props.vertical ? "" : "1px dashed" + COLORS[300]};
border-right: ${(props: PropType) =>
  props.vertical ? "1px dashed" + COLORS[300] : ""};
width: ${(props: PropType) => (props.vertical ? "1px" : "auto")};
position: relative;
left: ${(props: PropType) => (props.vertical ? "50%" : "")};
top: ${(props: PropType) => (props.vertical ? "" : "50%")};
`;

export default class LayoutButton extends React.Component<PropType, any> {
  render() {
    const { vertical, horizontal, selected, ...otherProps } = this.props;
    return (
      <Layout selected={selected} {...otherProps}>
        <Box>
          <DashedLine vertical={vertical} horizontal={horizontal} />
        </Box>
      </Layout>
    );
  }
}
