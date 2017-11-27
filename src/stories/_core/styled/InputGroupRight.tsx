import styled, { StyledFunction } from "styled-components";
// import COLORS from "./constants/COLORS";

interface PropType {
  paddingLeft?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  padding-left: ${(props: PropType) => (props.paddingLeft ? "8px" : 0)};
  width: 100%
`;
