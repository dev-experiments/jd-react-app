import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './HotelsMainPage.css';
import Header from './headers/Header';
import SearchFormPage from './search/SearchFormPage';
// import SearchSkull from './components/search/SearchSkull';
// import SearchForm from './components/search/SearchSkull';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from './../store/actions/search';

class HotelsMainPage extends Component {
    /*  constructor(props){
         super(props);
     } */
    render() {
        return (
            <div>
                <Header /> <SearchFormPage />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        current_view: state.search.current_view
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showSearch: bindActionCreators(searchActions, dispatch).showSearch
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelsMainPage));