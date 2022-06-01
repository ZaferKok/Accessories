import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import { useNavigate } from 'react-router-dom';
import { Button } from './styles/Button.styled';

function Cart(props) {

    const navigate = useNavigate()

    return (
        <div>
            <h4>Shopping Summary</h4><br></br><br></br><br></br>
            <div className='col-6'>
                <button id='cartBackButton' onClick={() => { navigate(-1) }}>{"\u21DA"}Back</button>
            </div><br />
            {
                props.cart.map((value, index) => {
                    return (
                        <div className='container'>
                            <div className='row rowCart'>
                                <div className='col'>
                                    <div onClick={() => {
                                        props.setDetails(value)
                                        navigate("/Accessories/product")
                                    }}><img id='miniCartPics' src={value.Pic} alt={value.Pic} />
                                    </div>
                                </div>
                                <div className='col'>
                                    <p id='productCartTitle'>{value.Title}</p>
                                </div>
                                <div className='col'>
                                    <p id='productCartPrice'>{(value.Price * value.Quantity).toFixed(2)} €</p>
                                </div>
                                <div className='col'>
                                    <button id='counter' onClick={() => props.minusCounter(value)}>-</button>
                                    <button id='counter'>({value.Quantity})</button>
                                    <button id='counter' onClick={() => props.plusCounter(value)}>+</button>
                                </div>
                                <div className='col'>
                                    <button id='delButton' onClick={() => { props.removeFromCart(index) }}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div id='clientInfo1' className='row'>
                <div className='col'>
                    {props.cart.length > 0 &&
                        <>
                            <label >Total amount: <br></br>
                                <p id='total'>
                                    {
                                        (props.cart.map(value => (value.Price * value.Quantity)).reduce((prev, next) => prev + next)).toFixed(2)
                                    }
                                    €
                                </p>
                            </label>
                            <div className='row' style={{ textAlign: "center", marginRight:"10%" }}>
                                <Button type='submit' onClick={() => props.loginStatus ? (props.resetCart(null), navigate("/Accessories/order")) : navigate("/Accessories/user")}>ORDER</Button>
                            </div>
                        </>
                    }
                    {props.cart.length == 0 &&
                        <>
                            <h3 style={{ color: "blueviolet", fontWeight: 'bolder' }}>There is nothing here!</h3>
                            <img src='.images/cart.jpg' alt='emoji' height='300px'></img>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);