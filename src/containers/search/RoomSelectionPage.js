import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from './../../store/actions/search';

import { withRouter } from "react-router-dom";

import RoomSelection from './../../components/search/RoomSelection';

import RoomClass from './../../classes/RoomClass.js';

class RoomSelectionPage extends Component {

    constructor(props) {
        super(props);
        this.roomDetails = new RoomClass();
        this.setRoomDetails = this.setRoomDetails.bind(this)
    }

    setRoomDetails(room_data) {
        console.log('ffffffffffff',this.props);
        this.props.setRoomDetails(room_data);
    }
    render() {
        return (
            <div>
                <RoomSelection roomDetails={this.props.room_details} setRoomDetails={this.setRoomDetails} />
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomSelectionPage));