import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import Size from "./types/SizePropType";
import Color from "./types/ColorPropType";

interface PropType extends Size, Color {
  paddingTop?: number;
  uiSpace?: string;
  disabled?: boolean;
}
const uiSize = {
  l: 16,
  m: 13,
  s: 12,
  xs: 11
};

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  margin-left:5px;
  font-size: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
  color: ${(props: any) =>
    props.uiColor ? COLORS[props.uiColor] : COLORS[300]};
    
  letter-spacing: -0.27px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 100;
  line-height: calc(${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px + 3px);
  align-self: center;
  text-overflow: ellipsis;
  white-spacing:no-wrap;
  opacity: ${(props: any) =>
    props.disabled !== undefined && props.disabled ? 0.5 : 1};
`;
