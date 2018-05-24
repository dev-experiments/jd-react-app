import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// import { Redirect } from 'react-router';
//import { bindActionCreators } from 'redux';
//import * as searchActions from './../../store/actions/search';
import SearchForm from './../../components/search/SearchForm';

class SearchFormPage extends Component {

    constructor(props) {
        super(props);
        this.doSearchHandle = this.doSearchHandle.bind(this);
    }

    doSearchHandle(e) {
        this.props.history.push("/results/searchId123");
    }

    render() {
        return (
            <SearchForm destination={this.destination} checkIn={this.checkIn} checkOut={this.checkOut} doSearch={this.doSearchHandle} />
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