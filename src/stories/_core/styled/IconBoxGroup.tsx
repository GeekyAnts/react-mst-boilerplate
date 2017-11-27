import styled, { StyledFunction } from "styled-components";

import Size from "./types/SizePropType";

interface PropType extends Size {
  bordered?: boolean;
  contentRight?: boolean;
  flexWrap?: boolean;
}

const uiSize = {
  l: "100%",
  m: "75%",
  s: "50%",
  xs: "25%",
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
    props.uiSize ? uiSize[props.uiSize] : uiSize["m"]};
  
  border: ${(props: PropType) => {
    return "none";
    /*if (props.bordered) return "1px solid" + COLORS[900];
    else return "none";*/
  }};
  justify-content:${(props: PropType) => {
    if (props.contentRight) return "flex-end";
    else return "flex-start";
  }};
  border-radius: 2px;
`;
