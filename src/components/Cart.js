import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import { useNavigate } from 'react-router-dom'

function Cart(props) {

    const navigate = useNavigate()

    return (
        <div>
            <h4>Shopping Summary</h4><br></br><br></br><br></br>
            <button id='cartBackButton' onClick={() => { navigate(-1) }}>{"\u21DA"}Back</button>
            {
                props.cart.map((value, index) => {
                    return (
                        <div className='container'>
                            <div className='row rowCart'>
                                <div className='col'>
                                    <div onClick={() => {
                                        props.setDetails(value)
                                        navigate("/product")
                                    }}><img id='miniCartPics' src={value.Pic} />
                                    </div>
                                </div>
                                <div className='col'>
                                    <p id='productCartTitle'>{value.Title}</p>
                                </div>
                                <div className='col'>
                                    <p id='productCartPrice'>{(value.Price * value.Quantity).toFixed(2)} €</p>
                                </div>
                                <div className='col'>
                                    <button id='counter' onClick={()=> props.minusCounter(value)}>-</button>
                                    <button id='counter'>({value.Quantity})</button>
                                    <button id='counter' onClick={()=> props.plusCounter(value)}>+</button>
                                    
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
                        <label >Total amount: <br></br>
                            <p id='total'>
                                {
                                    (props.cart.map(value => (value.Price * value.Quantity)).reduce((prev, next) => prev + next)).toFixed(2)
                                }
                                €
                            </p>
                        </label>}
                    <p></p>
                </div>
            </div>
            <div id='clientInfo1' className='row'>
                <div className='col'>
                    <div><label>Credit Card Number:</label></div>
                    <input type="text" required></input>
                </div>
                <div className='col'>
                    <div><label>Firstname and Lastname:</label></div>
                    <input type="text" required></input>
                </div>
            </div>
            <div id='clientInfo2' className='row'>
                <div className='col'>
                    <div><label>Address:</label></div>
                    <input type="text" required></input>
                </div>
                <div className='col'>
                    <div><label>Phone number:</label></div>
                    <input type="text" required></input>
                </div>
            </div>
            <div className='row'>
                <button id='orderButton' type='submit'>ORDER</button>
            </div>
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);