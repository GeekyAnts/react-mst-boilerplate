import styled, { StyledFunction } from "styled-components";
import COLORS from "./constants/COLORS";
import * as React from "react";

import Background from "./types/BackgroundPropType";
import Size from "./types/SizePropType";

interface PropType extends Background, Size {
  transparent?: boolean;
  last?: boolean;
}

const ul: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.ul;

const Dropdown = ul`
  position: relative;
  z-index: 2;
  list-style: none;

  .dd {
    left: -9999px;
    position: fixed;
    top: 0;
    width: ${(props: PropType) => (props.uiSize ? props.uiSize : "152")}px;
    border: 1px solid ${COLORS[900]};
    margin-left: 14.5%
  };
  ul {
    list-style: none;
    width: auto;
    left: -9999px;
    position: absolute;
    top: 37px;
    border: 1px solid ${COLORS[900]};
    background: ${(props: PropType) =>
      props.transparent ? "transparent" : COLORS[600]};
    border-radius: 3px;
    -webkit-padding-start: 0;
  };
  li {
    float: left;
    position: relative;
  };
  li a {
    color: ${COLORS[300]};
    letter-spacing: -0.27px;
    font-weight: 100
    display: block;
    float: left;
    font-size: 13px;
    padding: 4px;
    text-decoration: none;
  };
  > li > a {
    overflow: hidden;
    width: 100%
  };
  li:hover > a {
    background: ${(props: PropType) =>
      props.transparent ? "transparent" : COLORS[800]};
    color: ${COLORS[50]};
  };
  li a:focus {
    background: ${(props: PropType) =>
      props.transparent ? "transparent" : COLORS[800]};
    outline-width: 0;
  };
  li a:active + ul.dd,
  li a:focus + ul.dd,
  li ul.dd:hover {
    left: 10px;
    top: 33px;
  };
  .dd li {
  border-bottom: ${(props: PropType) =>
    props.last ? "none" : "1px solid" + COLORS[700]}
  };
  .dd li a {
    width: ${(props: PropType) => (props.uiSize ? props.uiSize : "150")}px;
    margin-top: 0px;
    padding: 8px
  };
  ul.dd li a:active + ul,
  ul.dd li a:focus + ul,
  ul.dd li ul:hover {
    left: 100%;
    top: 0%
  }
`;

const li: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.li;

const Option = li`
`;

const a: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> = styled.a;

const Link = a`
  flex: 1;
  display: flex;
`;

interface WrapperPropType extends PropType {}

class OptionMenu extends React.Component<WrapperPropType, any> {
  render() {
    return (
      <Link href="#" {...this.props}>
        {this.props.children}
      </Link>
    );
  }
}

const span: StyledFunction<PropType & React.HTMLProps<HTMLSpanElement>> =
  styled.span;

const OptionMenuLeft = span`
`;

const OptionMenuRight = span`;
  align-items: flex-end
`;

const OptionMenuTitle = span`
  flex: 1;;
  padding: 0 8px;
  font-size: 12px;
  color: ${COLORS[300]};
  letter-spacing: -0.27px;
  font-weight: 100;
`;

interface WrapperPropType extends PropType {
  child?: boolean;
}

class MenuDropdown extends React.Component<WrapperPropType, any> {
  render() {
    return (
      <Dropdown className={this.props.child ? "dd" : ""} {...this.props}>
        {this.props.children}
      </Dropdown>
    );
  }
}

export {
  MenuDropdown,
  Option,
  OptionMenu,
  OptionMenuLeft,
  OptionMenuRight,
  OptionMenuTitle
};
