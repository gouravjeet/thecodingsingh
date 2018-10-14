import React, { Component } from 'react';
import linkedin from '../linkedin.png';
import instagram from '../Instagram_icon.png';
import twitter from '../twitter.png';
import gravatar from '../gravatar_png.png';
import github from '../github.png';

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
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/gouravjeet">
                            <img height={'50px'} src={github} alt="logo" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://instagram.com/gouravjeet">
                        <img height={'50px'} src={instagram} alt="logo" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/gouravjeet-singh-0807ab16/">
                        <img height={'50px'} src={linkedin} alt="logo" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://twitter.com/gouravjeet">
                        <img height={'50px'} src={twitter} alt="logo" />
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Footer;
