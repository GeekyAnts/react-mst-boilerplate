import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {}

// const uiSize = {
//   l: "100px",
//   m: "50px",
//   s: "20px"
// };
const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  align-items:center;
  display:flex;
  bottom:0px;
  width:100%;
  position:absolute;

`;
