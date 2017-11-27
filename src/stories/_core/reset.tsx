// base-styles.js
import { injectGlobal } from "styled-components";
import reset from "styled-reset";
import COLORS from "./styled/constants/COLORS";
import fonts from "./styled/fonts";

const baseStyles = () => injectGlobal`
  ${reset}
  ${fonts}
  
  body  {
    background-color: ${COLORS[900]};
    *,
    *:before,
    *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    font-family: "Roboto";
    
  }

  html * {    
    color: ${COLORS[50]};
  }
  

`;

export default baseStyles;
