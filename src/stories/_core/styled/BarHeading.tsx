import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {}

const uiSize = {
  l: 40,
  m: 35,
  s: 30
};

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  height: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["m"]}px;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  align-items: center
`;
