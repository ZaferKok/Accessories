import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import React, { useEffect } from 'react';



function Home(props) {

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6 mt-5'>
                        <Link to='/womensaccessories'>
                            <div onClick={() => props.selectMainCat(0)}>
                                <img id='homPic' src='https://media.istockphoto.com/photos/woman-trendy-fashion-accessories-picture-id654407498?k=20&m=654407498&s=170667a&w=0&h=QJ6lXyKxMYPKfCWv6tTuwRWU-peZc45a6MNuxomH_Ys=' alt='WomenPicNotFound' />
                            </div><br /> <p id='homeSubtitle'>Find Best Women's Accesories</p>
                        </Link>
                    </div>


                    <div className='col-6 mt-5'>
                        <Link to='/mensaccessories'>
                            <div onClick={() => props.selectMainCat(1)}>
                                <img id='homPic' src='https://media.istockphoto.com/photos/mens-accessories-organized-on-table-no-people-knolling-picture-id526131186?k=20&m=526131186&s=170667a&w=0&h=MbciFUX_-90TBHk_O8aqjS98yptXlfTUJFbSZ9kzt9c=' alt='MenPicNotFound' />
                            </div><br /> <p id='homeSubtitle'>Find Best Men's Accesories</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);