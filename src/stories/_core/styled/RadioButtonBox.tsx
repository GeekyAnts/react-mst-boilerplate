import styled, { StyledFunction } from "styled-components";
// import COLORS from "./constants/COLORS";
import Size from "./types/SizePropType";
import Color from "./types/ColorPropType";

interface PropType extends Size, Color {
  paddingTop?: number;
}
const uiSize = {
  l: 16,
  m: 13,
  s: 12,
  xs: 11
};

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  flex-grow: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]};
    display: flex;
    justify-content: return "flex-start";
    align-items: center
  
`;
