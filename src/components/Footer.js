import React, { Component } from 'react';
import gravatar from '../gravatar_png.png';
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
class Footer extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }  
    render() {
        return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
            thecodingsingh <img height={'50px'} src={gravatar} alt="logo" />
            </NavbarBrand>
            </Navbar>
        </div>
        );
    }
}

export default Footer;
