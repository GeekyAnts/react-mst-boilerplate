import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import Background from "./types/BackgroundPropType";

interface PropType extends Background {}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
    background: ${(props: PropType) =>
      props.uiBackground ? COLORS[props.uiBackground] : COLORS[700]};
    display: flex;
    width: 100%;
    text-align: center;
    float: none;
    margin: 50px;
    border: 1px dotted ${COLORS[900]};
    padding: 50px;
    flex-direction: column;
    align-items: center;
    align-self:center;
`;
