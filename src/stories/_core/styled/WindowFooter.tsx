import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  padder?: boolean;
}

const uiSize = {
  l: 40,
  m: 35,
  s: 30,
  xs: 10
};
const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : COLORS[600]};
  
    width: 100%;
    height: ${(props: PropType) =>
      props.uiSize ? uiSize[props.uiSize] + "px" : "auto"};
    border-top: 1px solid ${COLORS[900]};
    padding: ${(props: any) => (props.padder ? "15px 10px" : "0")};

   
    
`;
// text-align:right;
// border-top: 1px solid #3F3F3F;
// clear:both;
// margin-top:20px;
// padding-top:15px;
