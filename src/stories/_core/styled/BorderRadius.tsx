import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import * as React from "react";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {
  selected?: boolean;
  locked?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;
const span: StyledFunction<PropType & React.HTMLProps<HTMLSpanElement>> =
  styled.span;

const BorderRadius = div`
  height: 44px;
  width: 46px;
  border-radius: 3px;
  padding: 0;
  display: flex;
  flex-wrap: wrap
`;

const TopLeftRadius = span`
height: 18px;
width: 18px;
border-top-left-radius: 3px;
position: relative;
border-left: ${(props: PropType) =>
  props.selected ? "2px solid" + COLORS[300] : "2px solid" + COLORS[400]};
border-top: ${(props: PropType) =>
  props.selected ? "2px solid" + COLORS[300] : "2px solid" + COLORS[400]};
margin: 0 3px 1px 0
`;

const BottomLeftRadius = span`
height: 18px;
width: 18px;
border-bottom-right-radius: 3px;
position: relative;
border-right: ${(props: PropType) =>
  props.selected ? "2px solid" + COLORS[300] : "2px solid" + COLORS[400]};
border-bottom: ${(props: PropType) =>
  props.selected ? "2px solid" + COLORS[300] : "2px solid" + COLORS[400]};
margin: 1px 0 0 1px
`;

const BottomRightRadius = span`
height: 18px;
width: 18px;
border-bottom-left-radius: 3px;
position: relative;
border-left: ${(props: PropType) =>
  props.selected ? "2px solid" + COLORS[300] : "2px solid" + COLORS[400]};
border-bottom: ${(props: PropType) =>
  props.selected ? "2px solid" + COLORS[300] : "2px solid" + COLORS[400]};
margin: 1px 3px 0 0
`;

const TopRightRadius = span`
height: 18px;
width: 18px;
border-top-right-radius: 3px;
position: relative;
border-right: ${(props: PropType) =>
  props.selected ? "2px solid" + COLORS[300] : "2px solid" + COLORS[400]};
border-top: ${(props: PropType) =>
  props.selected ? "2px solid" + COLORS[300] : "2px solid" + COLORS[400]};
margin: 0 0 1px 1px
`;

const BorderRadiusLock = div`
  height: 19px;
  width: 19px;
  display: inline-flex;
  margin-left: 10.5px;
  margin-top: 10.5px;
  position: absolute;
  justify-content: center;
  align-items: center;

`;

export {
  BorderRadius,
  BorderRadiusLock,
  BottomLeftRadius,
  TopLeftRadius,
  TopRightRadius,
  BottomRightRadius
};
