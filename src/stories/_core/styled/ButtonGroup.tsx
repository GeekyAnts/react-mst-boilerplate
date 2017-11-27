import styled, { StyledFunction } from "styled-components";
// import COLORS from "./constants/COLORS";

import Size from "./types/SizePropType";

interface PropType extends Size {
  contentRight?: boolean;
  flexWrap?: boolean;
}

const uiSize = {
  l: 40,
  m: 35,
  s: 30,
  xs: 23,
  xl: "auto"
};

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  display: flex;
  flex-wrap:${(props: any) => (props.flexWrap ? "wrap" : "nowrap")};  
  width: 100%;
  flex: 1;
  height: ${(props: any) =>
    props.uiSize
      ? props.uiSize === "xl"
        ? uiSize[props.uiSize]
        : uiSize[props.uiSize] + "px"
      : uiSize["m"] + "px"};
  justify-content:${(props: PropType) => {
    if (props.contentRight) return "flex-end";
    else return "flex-start";
  }};
  border-radius: 2px;
`;
