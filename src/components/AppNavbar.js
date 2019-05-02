import React, { Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class AppNavbar extends Component {
  
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
  render() {
    return (
      <div>
        <Navbar color="faded" dark expand="md">
          <NavbarBrand href="/">Portfolio</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;