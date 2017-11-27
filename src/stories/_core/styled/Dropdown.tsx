import styled, { StyledFunction } from "styled-components";
import * as React from "react";
import COLORS from "./constants/COLORS";

interface PropType {}
const select: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.select;

export default select`
  width: 100%;
  background: ${COLORS[600]};
  color: ${COLORS[300]};
  height: 22px;
  border: none; /*1px solid ${COLORS[900]};*/
  border-radius: 2px;
  font-size: 11px;
  outline: none;
  letter-spacing: -0.27px;
  font-weight: 100;
`;

// import styled, { StyledFunction } from "styled-components";
// import * as React from "react";
// import COLORS from "./constants/COLORS";

// interface PropType {}
// const select: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
//   styled.select;
// const div: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
//   styled.div;

// const Dropdown = div`
//   width: 80%;
//   background: ${COLORS[600]};
// `;
// const DropdownChildren = select`
// width: 100%;
// background: ${COLORS[600]};
// color: #E0E0E0;
// height: 20px;
// border: 1px solid #292929;
// border-radius: 2px;
// font-size: 11px;
// outline: none;
// -webkit-appearance: none;
// -moz-appearance: none;
// padding: 0 5px;
// background-image: url("./icons/downarrow") no-repeat 20px center;
// `;

// interface WrapperPropType {}

// export default class extends React.Component<WrapperPropType, any> {
//   render() {
//     const { children, ...otherProps } = this.props;
//     return (
//       <Dropdown {...otherProps}>
//         <DropdownChildren>{children}</DropdownChildren>
//       </Dropdown>
//     );
//   }
// }
