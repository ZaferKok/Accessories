import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import { useNavigate } from 'react-router-dom';

function Product(props) {

    const navigate = useNavigate(null)

    return (
        <div>
            <h4>Product Details</h4><br></br><br></br><br></br>
            <button id='productBackButton' onClick={() => { navigate(-1) }}>{"\u21DA"}Back</button>
            {
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img id='bigPic' src={props.detailselection.Pic} value={value.Pic}/>
                            <button id='likeButton' onClick={() => {console.log(props.favorite); props.addToFavorite(props.detailselection) }}>{"\u2764"}</button>
                        </div>
                        <div className='col'>
                            <p id='productSubtitle'>{props.detailselection.Title}</p>
                            <p id='productPrice'>Price: {props.detailselection.Price} €</p>
                            <button id='addCartButton' onClick={() => { props.addToCart(props.detailselection) }}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);