import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from './../../store/actions/search';

import { withRouter } from "react-router-dom";



class ResultsPage extends Component {

    /* constructor(props) {
        super(props);
    } */

    render() {
        return (
            <div>gfffffffffffff
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        room_details: state.search.room_details
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRoomDetails: bindActionCreators(searchActions, dispatch).setRoomDetails
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultsPage));