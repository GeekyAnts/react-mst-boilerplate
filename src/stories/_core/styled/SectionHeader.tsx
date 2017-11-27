import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {}

const uiSize = {
  l: "200px",
  m: "100px",
  s: "50px"
};
const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  align-items:center;
  display:flex;
  padding:10px;
  height: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]};
`;
