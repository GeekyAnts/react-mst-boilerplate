import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  border-bottom: 1px solid ${COLORS[900]};
  border-color:${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : COLORS[900]};
  margin:15px 0px;
  
       
`;
