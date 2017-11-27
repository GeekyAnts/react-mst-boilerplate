import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  sublayer?: boolean;
  header?: boolean;
  selected?: boolean;
  hover?: boolean;
  dragHoverInside?: boolean;
  transparent?: boolean;
  level?: number;
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
    props.dragHoverInside
      ? COLORS[900]
      : props.selected
        ? COLORS[500]
        : props.hover
          ? COLORS[900]
          : props.uiBackground
            ? COLORS[props.uiBackground]
            : props.sublayer ? "transparent" : "transparent"};
  height: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  padding-left: ${(props: any) => (props.level ? props.level * 15 : "5")}px;
`;
