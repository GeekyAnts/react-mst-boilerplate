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

const MarginLayout = div`
background: ${(props: PropType) =>
  props.selected ? COLORS[300] : "transparent"};
  height: 44px;
  width: 44px;
  border: 1px solid ${COLORS[400]};
  border-radius: 3px;
  padding: 0px 3px;

`;

const LeftSelector = span`
  height: 20px;
  width: 5px;
  background: ${(props: PropType) =>
    props.selected ? COLORS[300] : COLORS[400]};
  left: -6px;
  top: 6.5px;
  display: inline-block;
  position: relative
`;

const TopSelector = span`
height: 5px;
width: 20px;
background: ${(props: PropType) =>
  props.selected ? COLORS[300] : COLORS[400]};
left: 8px;
top: -3px;
display: block;
position: relative;
`;

const BottomSelector = span`
height: 5px;
width: 20px;
background: ${(props: PropType) =>
  props.selected ? COLORS[300] : COLORS[400]};
left: 8px;
display: inline-block;
top: 20px;
left: -2px;
position: relative
`;

const RightSelector = span`
height: 20px;
width: 5px;
background: ${(props: PropType) =>
  props.selected ? COLORS[300] : COLORS[400]};
top: 6.5px;
left: 32px;
display: inline-block;
position: relative;
top: 6.5px;
`;

const MarginLock = div`
  height: 19px;
  width: 19px;
  display: inline-flex;
  left: 8.5px;
  top: -16px;
  position: relative;
  justify-content: center;
  align-items: center;
  

`;

export {
  MarginLayout,
  MarginLock,
  TopSelector,
  LeftSelector,
  RightSelector,
  BottomSelector
};
