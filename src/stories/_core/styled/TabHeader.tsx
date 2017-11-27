import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  vertical?: boolean;
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
    props.uiBackground ? COLORS[props.uiBackground] : COLORS[600]};
  height: ${(props: PropType) =>
    props.uiSize
      ? uiSize[props.uiSize] + "px"
      : props.vertical ? "100%" : uiSize["s"] + "px"};
  border-bottom:${(props: PropType) => (props.vertical ? "0px" : "0px")};
  border-right:${(props: PropType) => (props.vertical ? "0px" : "0px")};
  display: ${(props: PropType) => (props.vertical ? "block" : "flex")};
  flex-direction: ${(props: PropType) => (props.vertical ? "column" : "row")};
`;
