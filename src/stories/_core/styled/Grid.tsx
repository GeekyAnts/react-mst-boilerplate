import styled, { StyledFunction } from "styled-components";

interface PropType {}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
    display: flex;
    height: 100%
`;
