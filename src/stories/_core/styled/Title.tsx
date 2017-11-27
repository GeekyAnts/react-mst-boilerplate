import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Size from "./types/SizePropType";

interface PropType extends Size {
  marginTop?: number;
  marginBottom?: boolean;
  uiColor?: number;
}
const uiSize = {
  l: 32,
  m: 24,
  s: 16,
  xs: 14
};
const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  font-size:${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["l"]}px;
   color:${(props: PropType) =>
     props.uiColor ? COLORS[props.uiColor] : COLORS["A700"]};
  letter-spacing: -0.27px;
  font-weight: 300;
  margin-top:  ${(props: any) =>
    props.marginTop ? props.marginTop + "10px" : "0px"};
  margin-bottom: ${(props: PropType) => (props.marginBottom ? "40px" : "10px")};
  flex: 1
`;
