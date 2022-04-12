import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';

function Favorite(props) {
    return (
        <div>
            like
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Favorite);