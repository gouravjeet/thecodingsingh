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
class Navigation extends Component {
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
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/gouravjeet">GitHub</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/resume">Resume</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Navigation;
