import React, { Component } from 'react';
import './HotelsMainPage.css';
import Header from './headers/Header';
import SearchForm from './search/SearchForm';
import SearchFilter from './search/SearchFilter';
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
        let searchForm = <div> <Header /> <SearchForm /> </div>;
        let filter = <SearchFilter title="Select your destination" />;
        let currentView = searchForm;

        if (this.props.current_view === 'search_filter') {
            currentView = filter;
        } 
        return (
            <div>
                {currentView}
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
export default connect(mapStateToProps, mapDispatchToProps)(HotelsMainPage);