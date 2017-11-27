import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {
  open?: boolean;
  selected?: boolean;
  hover?: boolean;
  dragHoverInside?: boolean;
  dragHoverBefore?: boolean;
  dragHoverAfter?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
background: ${(props: PropType) =>
  props.dragHoverBefore
    ? COLORS[400]
    : props.dragHoverInside
      ? COLORS[900]
      : props.selected
        ? COLORS[500]
        : props.hover
          ? COLORS[900]
          : props.open
            ? COLORS[700]
            : props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  height: 5px
`;
