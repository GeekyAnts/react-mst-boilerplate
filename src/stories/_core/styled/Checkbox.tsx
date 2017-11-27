import styled, { StyledFunction } from "styled-components";
// import COLORS from "./constants/COLORS";

import Color from "./types/ColorPropType";

interface PropType extends Color {
  paddingTop?: number;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  flex-grow: 1;
  display: flex;
  justify-content: "flex-start";
  align-items: center;
`;
