import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';

function Order(props) {
    return (
        <div className="container">
            <div className="row">
                <h2 id='orderHeader'>Mr/Mrs {props.loginForm.username}</h2><br></br>
                <h3 id='orderHeader' >Your order has been successfully completed and your product has been shipped to your address.</h3><br></br>
                <h2 id='orderHeader'>Thank you for shopping from us.</h2>
            </div>
            <div className="row">
                <img src="./images/order.jpg" value="gift boxes"></img>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);