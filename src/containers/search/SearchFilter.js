import React, { Component } from 'react';
import SearchPage from './../../JdLibs/wap/UI/pages/SearchPage';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from './../../store/actions/search';

class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_result_items: this.searchResultItems()
        };
    }
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
    //getPopularCitiesAction
    searchResultItems() {
        return [{
            title: 'Popular Cities',
            items: [{
                text: 'Bangalore',
                sub_text: 'Indiiiaa',
                link: '',
            },
            {
                text: 'mumbai',
                sub_text: 'India',
                link: '',
            }]
        }];
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
            <SearchPage title="Select your destination" searchResultItems={this.state.search_result_items} searchOptions={this.searchOptions()} headerOptions={this.headerOptions()} />
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
        setCurrentViewAction: bindActionCreators(searchActions, dispatch).setCurrentViewAction,
        getPopularCitiesAction: bindActionCreators(searchActions, dispatch).getPopularCitiesAction
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);