import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
`;
