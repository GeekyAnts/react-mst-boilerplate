import styled, { StyledFunction } from "styled-components";

interface PropType {}

const form: StyledFunction<PropType & React.HTMLProps<HTMLFormElement>> =
  styled.form;

export default form`
    display: flex;
    height: 100%
`;
