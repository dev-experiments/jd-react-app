import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
class CalendarPage extends Component {
    /* constructor(props) {
        super(props);
        
    } */
    
    render() {
        return (
            <div>in calendar </div>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CalendarPage));