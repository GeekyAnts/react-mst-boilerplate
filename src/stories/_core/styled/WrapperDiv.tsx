import styled, { StyledFunction } from "styled-components";

interface PropType {
  disabled?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  opacity: ${(props: PropType) => (props.disabled ? 0.5 : 1)};
  pointer-events:${(props: PropType) => (props.disabled ? "none" : "")};
  cursor: ${(props: PropType) =>
    props.disabled === undefined ? "" : props.disabled ? "not-allowed" : ""};
`;
