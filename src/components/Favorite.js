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
            {
                props.favorite.length == 0 &&
                <>
                <h2 style={{color:"blueviolet"}}>I guess you don't like something easily!</h2>
                <img src='./images/favori.jpg' alt='baby' height='400px' style={{borderRadius:"50px"}}></img>
                </>
                
            }
            {
                props.favorite.map((value, index) => {
                    return (
                        <div className='container'>
                            <div className='row rowCart'>
                                <div className='col'>
                                    <div onClick={() => {
                                        props.setDetails(value)
                                        navigate("/product")
                                    }}><img id='miniFavPics' src={value.Pic} alt={value} />
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