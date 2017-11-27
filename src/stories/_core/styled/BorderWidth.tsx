import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {
  selected?: boolean;
  locked?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;
const span: StyledFunction<PropType & React.HTMLProps<HTMLSpanElement>> =
  styled.span;

const BorderWidth = div`
  height: 44px;
  width: 44px;
  border-radius: 3px;
  padding: 0px 3px;

`;

const LeftBorderWidth = span`
  height: 39px;
  width: 0px;
  border-left: ${(props: PropType) =>
    props.selected ? "4px solid" + COLORS[300] : "4px solid" + COLORS[400]};
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  left: -3px;
  top: -4px;
  display: inline-block;
  position: relative
`;

const TopBorderWidth = span`
height: 0px;
width: 39px;
left: -2px;
top: 0px;
display: block;
position: relative;
border-top: ${(props: PropType) =>
  props.selected ? "4px solid" + COLORS[300] : "4px solid" + COLORS[400]};
border-left: 4px solid transparent;
border-right: 4px solid transparent;
`;

const BottomBorderWidth = span`
height: 0px;
width: 39px;
left: 8px;
border-bottom: ${(props: PropType) =>
  props.selected ? "4px solid" + COLORS[300] : "4px solid" + COLORS[400]};
border-left: 4px solid transparent;
border-right: 4px solid transparent;
display: inline-block;
top: -20px;
left: -2px;
position: relative
`;

const RightBorderWidth = span`
height: 39px;
width: 0px;
border-right: ${(props: PropType) =>
  props.selected ? "4px solid" + COLORS[300] : "4px solid" + COLORS[400]};
border-top: 4px solid transparent;
border-bottom: 4px solid transparent;
top: -4px;
left: 30px;
display: inline-block;
position: relative;
`;

const BorderWidthLock = div`
  height: 19px;
  width: 19px;
  display: inline-flex;
  left: 8px;
  top: -52px;
  position: relative;
  justify-content: center;
  align-items: center;

`;

export {
  BorderWidth,
  BorderWidthLock,
  TopBorderWidth,
  LeftBorderWidth,
  RightBorderWidth,
  BottomBorderWidth
};
