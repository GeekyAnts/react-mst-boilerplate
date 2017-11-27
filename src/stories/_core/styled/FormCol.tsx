import styled, { StyledFunction } from "styled-components";
import Size from "./types/SizePropType";

interface PropType extends Size {
  first?: boolean;
  contentLeft?: boolean;
  alignTop?: boolean;
  flex?: boolean;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
    display: ${(props: any) => (props.flex ? "flex" : "block")};
    width: 100%;
    flex: ${(props: any) => (props.uiSize ? props.uiSize : 1)};
    padding: ${(props: any) => (props.first ? "0 0 0 0" : "0 0 0 8px")};
    align-items: ${(props: PropType) => {
      if (props.alignTop) {
        return "flex-start";
      } else {
        return "center";
      }
    }};
    justify-content:${(props: PropType) => {
      if (props.contentLeft) {
        return "flex-start";
      } else {
        return "center";
      }
    }};
`;
