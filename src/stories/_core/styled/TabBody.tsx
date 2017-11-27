import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {
  padder?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  font-size: 12px;
  padding: ${(props: PropType) => (props.padder ? "20px" : "0")};
  flex:1;
`;
