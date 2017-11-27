import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";

import Background from "./types/BackgroundPropType";
import Color from "./types/ColorPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Color, Size {
  contentCenter?: boolean;
  scrollable?: boolean;
  padder?: string;
  draggable?: true;
}

const div: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.div;
const padder = {
  xl: "100px 60px",
  l: "30px 100px",
  m: "50px",
  s: "40px",
  xs: "15px"
};

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : COLORS[500]};
  color: ${(props: PropType) =>
    props.uiColor ? COLORS[props.uiColor] : COLORS[50]};
  height: 100%;
  flex-grow:1;
  text-align: ${(props: PropType) => {
    if (props.contentCenter) {
      return "center";
    } else {
      return "left";
    }
  }};
  overflow: ${(props: PropType) => (props.scrollable ? "scroll" : "hidden")};
  padding: ${(props: PropType) =>
    props.padder ? padder[props.padder] : padder[""]};
  -webkit-app-region: ${(props: PropType) =>
    props.draggable ? "drag" : "no-drag"};
  input[type="button"], input[type="text"], button, textarea { -webkit-app-region: no-drag; }
`;
