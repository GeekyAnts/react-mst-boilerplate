import styled, { StyledFunction } from "styled-components";

interface PropType {
  noPadding?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
    display: flex;
    flex-direction: column;
    padding: ${(props: PropType) => (props.noPadding ? "" : "12px")};
    flex-grow:1;
`;
