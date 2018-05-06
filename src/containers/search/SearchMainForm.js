import React, { Component } from 'react';

import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import * as searchActions from './../../store/actions/search';
import SearchForm from './../../components/search/SearchForm';

class SearchMainForm extends Component {
    /* constructor(props) {
        super(props);
    } */
    setDestinationHandle(e) {
      //  this.props.setCurrentViewAction('search_filter');
      alert(3);
    }
    render() {
        return (
            <SearchForm setDestination={this.setDestinationHandle} destination={''} checkIn={''} checkOut={''} guest={''} />

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
export default connect(mapStateToProps, mapDispatchToProps)(SearchMainForm);