import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  sublayer?: boolean;
  header?: boolean;
  open?: boolean;
  hover?: boolean;
  transparent?: boolean;
}

const uiSize = {
  l: 40,
  m: 35,
  s: 30,
  xs: 27,
  xl: "auto"
};

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.open
      ? COLORS[700]
      : props.hover
        ? COLORS[900]
        : props.uiBackground ? COLORS[props.uiBackground] : COLORS[800]};
  height: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  padding-left: 15px;
  justify-content: space-between
`;
