import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalHeader, ModalBody, 
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import HomeCarousel from './CarouselComponent';

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mx-auto ml-auto nav-fill w-100" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <p>About</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <p>Menu</p>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <h3>Kokomo</h3>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                        <p>Contact</p>
                                    </NavLink>
                                </NavItem>
                                <NavLink className="nav-link" to="/orderonline">
                                    <p>Order Online</p>
                                </NavLink>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <HomeCarousel />

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;