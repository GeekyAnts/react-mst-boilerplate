import styled, { StyledFunction } from "styled-components";

import Size from "./types/SizePropType";

interface PropType extends Size {}

const div: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.div;

export default div`
    flex-grow: ${(props: any) => (props.size ? props.size : 1)}
`;
