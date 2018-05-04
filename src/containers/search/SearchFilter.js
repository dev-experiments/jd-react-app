import React, { Component } from 'react';
import SearchPage from './../../JdLibs/wap/UI/pages/SearchPage';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from './../../store/actions/search';

class SearchFilter extends Component {
    /* constructor(props) {
        super(props);
    } */
    searchOptions() {
        return {
            placeholder: 'Select your destination',
            search_item_callback: () => { alert('search item called') },
       //     search_keyUp_callback: () => { this.updateResult() }
        };
    }
    componentDidMount(){
        this.props.getPopularCitiesAction();
    }
    
    searchResultItems() {
        return this.props.popular_cities;
    }
    headerOptions() {
        return {
            back_callback: () => this.backButton(),
            rightLink_label: 'Close',
            rightLink_callback: () => this.backButton(),
        };
    }
    backButton() {
        this.props.setCurrentViewAction('search_form');
    }
    render() {
        return (
            <SearchPage title="Select your destination" searchResultItems={this.props.popular_cities} searchOptions={this.searchOptions()} headerOptions={this.headerOptions()} />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        current_view: state.search.current_view,
        popular_cities: state.search.popular_cities
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentViewAction: bindActionCreators(searchActions, dispatch).setCurrentViewAction,
        getPopularCitiesAction: bindActionCreators(searchActions, dispatch).getPopularCitiesAction
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);