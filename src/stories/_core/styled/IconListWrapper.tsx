import styled, { StyledFunction } from "styled-components";

interface PropType {
  expand?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
    height: ${(props: PropType) => (props.expand ? "500px" : "120px")};
    overflow: ${(props: PropType) => (props.expand ? "scroll" : "hidden")};
`;
