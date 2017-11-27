import styled from "styled-components";
import Spinner from "./icons/spinner";
import COLORS from "./constants/COLORS";
import * as React from "react";
import Size from "./types/SizePropType";
interface PropType extends Size {
  uiBackground?: number;
  uiBackgroundDark?: number;
  uiBackgroundLight?: number;
}
const uiSize = {
  l: "50px",
  m: "35px",
  s: "20px",
  xs: "15px"
};
const SpinnerSvg = styled.svg`
  animation: iosIntro 0.6s;
  width: ${(props: PropType) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["xs"]};
  height: ${(props: PropType) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["xs"]};

  margin-left: 5px;
  z-index: 9999999;
  fill: ${(props: PropType) =>
    props.uiBackground ? COLORS[props.uiBackground] : COLORS[200]};

  path:nth-of-type(1) {
    animation: pulse 1s infinite linear;
  }
  path:nth-of-type(2) {
    animation: pulse 1s -0.083s infinite linear;
  }
  path:nth-of-type(3) {
    animation: pulse 1s -0.166s infinite linear;
  }
  path:nth-of-type(4) {
    animation: pulse 1s -0.249s infinite linear;
  }
  path:nth-of-type(5) {
    animation: pulse 1s -0.332s infinite linear;
  }
  path:nth-of-type(6) {
    animation: pulse 1s -0.415s infinite linear;
  }
  path:nth-of-type(7) {
    animation: pulse 1s -0.498s infinite linear;
  }
  path:nth-of-type(8) {
    animation: pulse 1s -0.581s infinite linear;
  }
  path:nth-of-type(9) {
    animation: pulse 1s -0.664s infinite linear;
  }
  path:nth-of-type(10) {
    animation: pulse 1s -0.747s infinite linear;
  }
  path:nth-of-type(11) {
    animation: pulse 1s -0.83s infinite linear;
  }
  path:nth-of-type(12) {
    animation: pulse 1s -0.913s infinite linear;
  }

  @keyframes pulse {
    50% {
      fill: ${(props: PropType) =>
        props.uiBackgroundDark ? COLORS[props.uiBackgroundDark] : COLORS[500]};
    }
    to {
      fill: ${(props: PropType) =>
        props.uiBackgroundLight
          ? COLORS[props.uiBackgroundLight]
          : COLORS[400]};
    }
  }

  @keyframes iosIntro {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default class extends React.Component<any, any> {
  render() {
    // const { caption, icon, children, ...otherProps } = this.props;
    return (
      <SpinnerSvg {...this.props}>
        <Spinner />
      </SpinnerSvg>
    );
  }
}
