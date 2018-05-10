import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
class RoomSelectionPage extends Component {
    /* constructor(props) {
        super(props);
        
    } */
    
    render() {
        
        return (
            <div>in RoomSelection </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        // current_view: state.search.current_view
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //setCurrentViewAction: bindActionCreators(searchActions, dispatch).setCurrentViewAction
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomSelectionPage));