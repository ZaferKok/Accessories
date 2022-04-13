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
                <Navbar className="navbarBox">
                {/* className="navbarBox" bg="light" variant="light" */}
                    <Container style={{ marginBottom: "2rem", marginTop: "2rem", borderRadius: "5px"}}>
                        <Navbar.Collapse className="navbar">
                            <NavLink id="lnk" to="/">Home</NavLink>
                            <NavLink id="lnk" to="/womensaccessories" onClick={()=>props.selectMainCat(0)}> Women's Accesorie</NavLink>
                            <NavLink id="lnk" to="/mensaccessories" onClick={()=>props.selectMainCat(1)}> Men's Accesories</NavLink>
                            <NavLink id="lnk" to="/favorite">{"\u2764"}Favorite{"\u2764"}</NavLink>
                            <NavLink id="lnk" to="/user">Hello, {(props.loginStatus) ? (props.loginForm.username) : ("Sign in")}</NavLink>
                            <NavLink id="lnk" to="/cart">Cart{"\uD83D\uDED2"} ({props.cart.length})</NavLink>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Navi);