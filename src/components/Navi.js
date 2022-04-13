import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';


function Navi(props) {
    return (
        <div
            className="container"
            style={{ marginBottom: "3rem", marginTop: "1rem", borderRadius: "5px" }}
        >
            <div className="row forNavbar">
                <Navbar className="navbarBox" bg="light" variant="light">
                    <Container  style={{ marginBottom: "2rem", marginTop: "2rem", borderRadius: "5px"}}>
                        <Navbar.Collapse className="navbar">
                            <NavLink to="/"><Navbar.Brand id="lnk">Home</Navbar.Brand></NavLink>
                            <NavLink to="/womensaccessories" onClick={()=>props.selectMainCat(0)}><Navbar.Brand id="lnk">Women's Accesories</Navbar.Brand></NavLink>
                            <NavLink to="/mensaccessories" onClick={()=>props.selectMainCat(1)}><Navbar.Brand id="lnk">Men's Accesories</Navbar.Brand></NavLink>
                            <NavLink to="/favorite"><Navbar.Brand id="lnk">{"\u2764"}Favorite{"\u2764"}</Navbar.Brand></NavLink>
                            <NavLink to="/user"><Navbar.Brand id="lnk">Hello, {(props.loginStatus) ? (props.loginForm.username) : ("Sign in")} </Navbar.Brand></NavLink>
                            <NavLink to="/cart"><Navbar.Brand id="lnk">Cart{"\uD83D\uDED2"} ({props.cart.length})</Navbar.Brand></NavLink>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Navi);