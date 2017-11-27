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
  xs: 25,
  xxs: 15
};

// const padding = 5;

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : "transparent"};
  height: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["l"]}px;
  padding: ${(props: any) => (props.padder ? "0 5px 0 8px" : "0")};
};
`;
