import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import Size from "./types/SizePropType";

interface PropType extends Size {
  marginBottom?: Boolean;
  uiColor?: number;
  marginTop?: boolean;
}
const uiSize = {
  l: 21,
  m: 16,
  s: 14,
  xs: 12
};
const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  font-size:${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["l"]}px;
//   color: ${COLORS["A700"]};
  color:${(props: PropType) =>
    props.uiColor ? COLORS[props.uiColor] : COLORS["A700"]};
  letter-spacing: -0.27px;
  font-weight: 300;
// margin-Top: ${(props: PropType) => (props.marginTop ? "30px" : "10px")};
margin-bottom: ${(props: PropType) => (props.marginBottom ? "50px" : "10px")};

 
`;
