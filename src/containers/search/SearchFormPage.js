import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
//import { bindActionCreators } from 'redux';
//import * as searchActions from './../../store/actions/search';
import SearchForm from './../../components/search/SearchForm';

class SearchFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectTo: ''
        }
        this.setDestinationHandle = this.setDestinationHandle.bind(this);
        this.roomSelectionHandle = this.roomSelectionHandle.bind(this);
        this.checkInHandle = this.checkInHandle.bind(this);
        this.setCheckOuthandle = this.setCheckOuthandle.bind(this);
    }
    setDestinationHandle(e) {
        this.setState(() => {
            return { redirectTo: 'search' }
        });
    }
    setCheckOuthandle(e) {
        this.setState(() => {
            return { redirectTo: 'calendar' }
        });
    }
    checkInHandle(e) {
        this.setState(() => {
            return { redirectTo: 'calendar' }
        });
    }
    roomSelectionHandle(e) {
        this.setState(() => {
            return { redirectTo: 'roomSelection' }
        });
    }
    render() {
        return (
            <SearchForm destination={this.destination} checkIn={this.checkIn} checkOut={this.checkOut} roomSelection={this.roomSelection} />
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchFormPage));