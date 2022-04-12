import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import { useNavigate } from 'react-router-dom'

function Favorite(props) {

    const navigate = useNavigate()

    return (
        <div>
            <h4>Favorite List</h4><br></br><br></br><br></br>
            <button id='cartBackButton' onClick={() => { navigate(-1) }}>{"\u21DA"}Back</button>
            {
                props.favorite.map((value, index) => {
                    return (
                        <div className='container'>
                            <div className='row rowCart'>
                                <div className='col'>
                                    <div onClick={() => {
                                        props.setDetails(value)
                                        navigate("/product")
                                    }}><img id='miniFavPics' src={value.Pic} />
                                    </div>
                                    {/* onClick={navigate("/product")} */}
                                    <p id='productFavTitle'>{value.Title}</p>
                                    <button id='favButton' onClick={() => { props.removeFromFavorite(index) }}>{"\u2764"}</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorite);