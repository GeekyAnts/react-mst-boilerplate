import styled, { StyledFunction } from "styled-components";
// import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {
  overlay?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
background: ${(props: PropType) =>
  props.overlay ? "rgba(0,0,0,0.5)" : "transparent"};
position: ${(props: PropType) => (props.overlay ? "absolute" : "")};
top: ${(props: PropType) => (props.overlay ? "0" : "")};
bottom: ${(props: PropType) => (props.overlay ? "0" : "")};
left: ${(props: PropType) => (props.overlay ? "0" : "")};
right: ${(props: PropType) => (props.overlay ? "0" : "")};
z-index: 2;
cursor: ${(props: PropType) => (props.overlay ? "pointer" : "")};
width: 100%;
height: 100%;
margin: auto
`;
