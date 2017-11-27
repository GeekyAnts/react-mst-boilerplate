import styled, { StyledFunction } from "styled-components";

interface PropType {
  alignTop?: boolean;
  noPadding?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
    display: flex;
    padding: 5px 0;
    padding-bottom: ${(props: PropType) => (props.noPadding ? "0" : "")};
    align-items: ${(props: PropType) => {
      if (props.alignTop) {
        return "flex-start";
      } else {
        return "center";
      }
    }};
`;
