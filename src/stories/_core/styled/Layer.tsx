import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {
  borderBottom?: boolean;
  open?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.open
      ? COLORS[700]
      : props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
`;
