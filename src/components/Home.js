import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import React from 'react';



function Home(props) {

    return (
        <div>
            <div className='container mt-5' style={{display:"inline-block", textAlign:"center"}}>
                <div className='row' >
                    <div className='col-6 mt-5'>
                        <Link to='/Accessories/womensaccessories'>
                            <div onClick={() => props.selectMainCat(0)}>
                                <img id='homPic' src='./images/womens.jpg' alt='WomenPicNotFound' />
                                <p id='homeSubtitle'>Find Best Women's Accesories</p>
                            </div><br /> 
                        </Link>
                    </div>
                    <div className='col-6 mt-5'>
                        <Link to='/Accessories/mensaccessories'>
                            <div onClick={() => props.selectMainCat(1)}>
                                <img id='homPic' src='./images/mens.jpg' alt='MenPicNotFound' />
                                <p id='homeSubtitle'>Find Best Men's Accesories</p>
                            </div><br /> 
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);