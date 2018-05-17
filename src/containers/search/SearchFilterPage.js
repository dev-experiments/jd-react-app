import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from './../../store/actions/search';

import SearchPage from './../../JdLibs/wap/UI/pages/SearchPage';
import MainHeader from './../../JdLibs/wap/UI/headers/MainHeader';
import { Delay } from './../../shared/utils/Misc';

class SearchFilterPage extends Component {

    constructor(props) {
        super(props);
        this.backButton = this.backButton.bind(this);
        // this.clearSearchInput = this.clearSearchInput.bind(this);
        this.state = {
            searchOptions: this.searchOptions()
        }
    }

    searchOptions(ph, sil) {
        return {
            placeholder: ph || 'Enter City or Hotel Name',
            searchItemCallback: () => { alert('search item called') },
            searchItemLabels: sil || { text: 'city', sub_text: 'country' },
            searchInputChangeCallback: (e) => { this.destinationSearchHandle(e) },
            clearSearchInputCallback: (e) => { this.clearSearchInput(e) }
        };
    }

    componentDidMount() {
        this.props.getPopularCitiesAction();
    }

    headerOptions() {
        return {
            backCallback: () => this.backButton(),
            rightLinkLabel: 'Close',
            rightLinkCallback: () => this.backButton(),
        };
    }


    backButton() {
        this.props.history.push('/');
    }

    destinationSearchHandle(e) {
        // console.log(e.value);
        const data = {
            search: e.value,
            city: 'delhi',
            country: 'India'
        };
        if (e.value) {
            Delay(() => {
                this.setState(() => {
                    return { searchOptions: this.searchOptions('', { text: 'text', sub_text: 'sub_text' }) }
                });
                this.props.destinationSearchAction(data);
            }, 700);
        } else {
            this.resetSearchResult();
        }

    }

    clearSearchInput(e) {
       this.resetSearchResult();
    }
    resetSearchResult(e) {
        this.setState(() => {
            return { searchOptions: this.searchOptions() }
        });
        this.props.resetDestinationToAction(this.props.popular_cities);
    }
    render() {
        return (
            <div>
                <MainHeader title='Select your destination' options={this.headerOptions()} />
                <SearchPage searchItems={this.props.destination_results} searchOptions={this.state.searchOptions} />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        popular_cities: state.search.popular_cities,
        destination_results: state.search.destination_results,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPopularCitiesAction: bindActionCreators(searchActions, dispatch).getPopularCitiesAction,
        destinationSearchAction: bindActionCreators(searchActions, dispatch).destinationSearchAction,
        resetDestinationToAction: bindActionCreators(searchActions, dispatch).resetDestinationToAction,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilterPage);