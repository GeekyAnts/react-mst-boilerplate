import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Size from "./types/SizePropType";

interface PropType extends Size {
  marginTop?: number;
  marginBottom?: boolean;
}
const uiSize = {
  l: 32,
  m: 22,
  s: 16,
  xs: 14
};
const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  font-size:${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["l"]}px;
  color: ${COLORS[50]};
  letter-spacing: -0.27px;
  font-weight: 300;
  margin-top:  ${(props: any) =>
    props.marginTop ? props.marginTop + "px" : "10px"};
  margin-bottom: ${(props: PropType) => (props.marginBottom ? "50px" : "10px")};
  flex: 1
`;
