import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  selected?: boolean;
  first?: boolean;
}

const uiSize = {
  l: 40,
  m: 35,
  s: 26,
  xs: 18
};

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.selected
      ? COLORS[800]
      : props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  height: ${(props: PropType) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
  border-left: ${(props: PropType) =>
    props.first ? "0px" : props.selected ? "0px" : "0px"};
  border-right: ${(props: PropType) => (props.selected ? "0px" : "0px")};
  font-size: 11px;
  color: ${COLORS[300]};
  letter-spacing: -0.27px;
  font-weight: ${(props: PropType) => (props.selected ? "500" : "100")};
  align-items: center;
  display: flex;
  padding: 0 20px;
  :hover {
    background: ${COLORS[800]};
  }
  :focus,
  :active {
    background: ${COLORS[800]};
    border-left: ${(props: PropType) => (props.first ? "0px" : "0px")};
    border-right: none; // 1px solid ${COLORS[900]};
    font-weight: 500
  }
`;
