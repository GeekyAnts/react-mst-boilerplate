import * as React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => (
    <Navbar inverse={true} collapseOnSelect={true} staticTop={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">MST TypeScript Boilerplate</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);
export default Header;
