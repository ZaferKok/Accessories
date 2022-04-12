import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import { useNavigate } from 'react-router-dom';

function WomensAccessories(props) {

    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='row'>
                {
                    props.subcats.map((product, index) => {
                        if (product.maincat == props.form.maincat) {
                            return (
                                <div className='col align-self-start'>
                                    <h3 id='itemTitle'>{product.name}...</h3><br /><br />
                                    {
                                        props.items.map((value, ind) => {
                                            if (product.subcat == value.subcat && product.maincat == value.maincat) {
                                                return (
                                                    // <Link to={`/accessories/${value.id}`}>
                                                        <div id='miniPicsBox' onClick={()=>{
                                                            props.setDetails(value)
                                                            navigate("/product")
                                                        }}>
                                                            <img src={value.Pic} id='miniPics'></img>
                                                        </div>
                                                    // </Link>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(WomensAccessories);