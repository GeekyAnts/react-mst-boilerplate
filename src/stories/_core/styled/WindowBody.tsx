import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  padder?: boolean;
}

const uiSize = {
  l: "900px",
  m: "520px",
  s: "200px"
};
const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
    display:flex;
    width: 100%;
     position:relative;
     min-height:${(props: any) =>
       props.uiSize ? uiSize[props.uiSize] : uiSize[""]};
    padding: ${(props: any) => (props.padder ? "30px 0px" : "0")};
`;
