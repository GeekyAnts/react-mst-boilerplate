import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import { secondary } from "./constants/COLORS";
import * as React from "react";

import Background from "./types/BackgroundPropType";

interface PropType extends Background {
  min?: string;
  max?: string;
  value?: string;
  onMouseUp?: (e: any) => void;
  onMouseDown?: (e: any) => void;
  onMouseMove?: (e: any) => void;
  onChange?: any;
  step?: string;
}

const input: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.input;

const Slider = input`
  width: 100%;
  display: flex;
    -webkit-appearance: media-enter-fullscreen-button;
    // border: 1px solid transparent;
::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    background: ${COLORS[400]};
    border: none;
    border-radius: 4px;
}
::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: ${secondary[900]};
    margin-top: -4px;
}
::-webkit-slider-thumb:hover, 
::-webkit-slider-thumb:focus {
  -webkit-appearance: none;
  border: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${secondary[600]};
  margin-top: -4px;
}
:focus {
    outline: none;
}
:focus::-webkit-slider-runnable-track {
    background: ${COLORS[400]};
}

// ::-moz-range-track {
//     width: 100%;
//     height: 2px;
//     background: ${COLORS[400]};
//     border: none;
//     border-radius: 3px;
// }
// ::-moz-range-thumb {
//     border: none;
//     height: 12px;
//     width: 12px;
//     border-radius: 50%;
//     background: goldenrod;
// }

  
`;

interface WrapperPropType extends PropType {}

export default class extends React.Component<WrapperPropType, any> {
  render() {
    return <Slider type="range" {...this.props} />;
  }
}

// ::-webkit-slider-thumb {
//   -webkit-appearance: none;
//   border: 1px solid #000000;
//   height: 16px;
//   width: 16px;
//   border-radius: 16px;
//   background-color: #111111;
//   cursor: pointer;
//   margin-top: -6px
// };
// ::-webkit-slider-runnable-track {
//   -webkit-appearance: none;
//   width: 100%;
//   height: 6px;
//   cursor: pointer;
//   box-shadow: 0px 0.5px 0px #000000;
//   background: ${COLORS[600]};
//   border-radius: 3px;
//   border: 0.5px solid #111;
//   margin-top: -5px
// }
