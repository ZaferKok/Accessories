import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import { useNavigate } from 'react-router-dom'

function Cart(props) {

    const navigate = useNavigate()

    return (
        <div>
            <h4>Product Details</h4><br></br><br></br><br></br>
            <button id='productBackButton' onClick={() => { navigate(-1) }}>{"\u21DA"}Back</button>
            {
                props.cart.map((value, index) => {
                    return (
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <img id='miniCartPics' src={value.Pic} />
                                </div>
                                <div className='col'>
                                    <p id='productCartTitle'>{value.Title}</p>
                                </div>
                                <div className='col'>
                                    <p id='productCartPrice'>{value.Price} €</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
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
            {

            }
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);