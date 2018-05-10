import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from './../../store/actions/search';

import SearchPage from './../../JdLibs/wap/UI/pages/SearchPage';
import MainHeader from './../../JdLibs/wap/UI/headers/MainHeader';

class SearchFilterPage extends Component {
    constructor(props) {
        super(props);
        this.backButton = this.backButton.bind(this);
    }
    searchOptions() {
        return {
            placeholder: 'Enter City or Hotel Name',
            searchItemCallback: () => { alert('search item called') },
            searchItemLabels: { text: 'city', sub_text: 'country' },
            //     search_keyUp_callback: () => { this.updateResult() }
        };
    }
    componentDidMount() {
        this.props.getPopularCitiesAction();
    }

    headerOptions() {
        return {
            backCallback: () => this.backButton(),
            rightLink_label: 'Close',
            rightLinkCallback: () => this.backButton(),
        };
    }
    backButton() {
        this.props.history.push('/')
    }
    render() {
        console.log('this render', this.props);
        return (
            <div>
                <MainHeader title='Select your destination' options={this.headerOptions()} />
                <SearchPage searchItems={this.props.popular_cities} searchOptions={this.searchOptions()} />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        popular_cities: state.search.popular_cities
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPopularCitiesAction: bindActionCreators(searchActions, dispatch).getPopularCitiesAction
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterPage);