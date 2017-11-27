import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {}

const uiSize = {
  l: 40,
  m: 35,
  s: 30,
  xs: 18
};

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : COLORS[600]};
  display: flex;
  height: ${(props: PropType) =>
    props.uiSize ? uiSize[props.uiSize] + "px" : "auto"};
  border-bottom: none; 
  // 1px solid ${COLORS[900]};
`;
