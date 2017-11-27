import styled, { StyledFunction } from "styled-components";
import Size from "./types/SizePropType";

interface PropType extends Size {}
const uiSize = {
  l: 98,
  s: 30
};

const margin = {
  l: 10,
  s: 5
};

const img: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.img;

export default img`
    height: ${(props: any) =>
      props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
     margin-bottom:${(props: any) =>
       props.uiSize ? margin[props.uiSize] : margin["s"]}px;
`;
