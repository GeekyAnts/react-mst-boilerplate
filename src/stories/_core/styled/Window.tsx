import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import SizePropType from "./types/SizePropType";

interface PropType extends Background, SizePropType {}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

const uiSize = {
  l: "980px",
  m: "550px",
  s: "430px",
  xs: "320px"
};

export default div`
    background: ${(props: PropType) =>
      props.uiBackground ? COLORS[props.uiBackground] : COLORS[800]};
      width:${(props: PropType) =>
        props.uiSize ? uiSize[props.uiSize] : "100%"};
    margin: auto;
border-radius:3px;
display: table;
overflow:hidden;
z-index:2;
`;
