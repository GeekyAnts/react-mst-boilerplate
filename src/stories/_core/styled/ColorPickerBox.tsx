import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {
  position?: string;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

const ColorPickerBox = div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "#FFF"};
  height: 23px;
  border: 3px solid ${COLORS[600]};
  border-radius: 2px;
  width: 40px;
  position: relative;
`;

const ColorPickerContainer = div`
  position: absolute;
  z-index: 99;
  right: ${(props: PropType) => (props.position === "right" ? -3 + "px" : "")};
  left: ${(props: PropType) => (props.position === "left" ? -3 + "px" : "")};
`;

export { ColorPickerBox, ColorPickerContainer };
