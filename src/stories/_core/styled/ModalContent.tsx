import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

const uiSize = {
  l: "980px",
  m: "550px",
  s: "430px",
  xs: "320px"
};

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  width: 100%;
  max-width:${(props: PropType) =>
    props.uiSize ? uiSize[props.uiSize] : "auto"};
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
overflow:hidden;
z-index;: 9;
margin: auto;
height: fit-content
`;
