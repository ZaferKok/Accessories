import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';

function User(props) {
    return (
        <div>
            Kullanici
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (User);