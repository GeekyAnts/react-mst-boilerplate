import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  first?: boolean;
  marginRight?: number;
  marginTop?: number;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
    background: ${(props: PropType) =>
      props.uiBackground ? COLORS[props.uiBackground] : COLORS[800]};
    width:100px;
    height:100px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    // padding: ${(props: any) => (props.first ? "0 0 0 0" : "0 0 0 0")};
    align-items: center;
    margin:  ${(props: any) =>
      props.marginRight ? props.marginRight + "px" : "10px"};
    // box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.38), inset 0 0 0 0 rgba(165,165,165,0.98);
    // padding:30px 0px;
`;
