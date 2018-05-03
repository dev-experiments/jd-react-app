import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainHeader from './../headers/MainHeader';
import SearchPageList from './SearchPageList';

import './SearchPage.css';

class SearchPage extends Component {
    static defaultProps = {
        searchResultItems: [],
        searchOptions: {
            placeholder: '',
            search_item_callback: () => { },
            search_keyUp_callback: () => { }
        },
        headerOptions: {
            title_callback: () => { },
            back_label: '',
            back_callback: () => { },
            rightLink_label: '',
            rightLink_callback: () => { }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    keyUpHandle(e) {
        this.setState({ searchInput: e.target.value });
        if (this.props.searchOptions.search_keyUp_callback) {
            this.props.searchOptions.search_keyUp_callback(e.target.value);
        }
    }
    searchInputOnChange(e) {
        this.setState({ searchInput: e.target.value });
    }
    clearTextHandle() {
        this.setState({ searchInput: '' });
    }
    render() {
        const header = <MainHeader title={this.props.title} options={this.props.headerOptions} />;
        const search = <div className="srchhtl">
            <span className="icon-search"></span>
            <input value={this.state.searchInput} name="searchInput" type="text" onChange={(e) => { this.searchInputOnChange(e) }} onKeyUp={(e) => { this.keyUpHandle(e) }} placeholder={this.props.searchOptions.placeholder} autoComplete="off" />
            <span className="cls_otr" onClick={(e) => { this.clearTextHandle(e) }} >
                <span className="icon-close"></span>
            </span>
        </div>;
        return (
            <div className="htldestsrch mrgfxd">
                {header}
                {search}
                <SearchPageList list_items={this.props.searchResultItems} item_callback={this.props.searchOptions.search_item_callback} />
            </div>
        );
    }
}

SearchPage.propTypes = {
    title: PropTypes.string.isRequired,
    searchOptions: PropTypes.shape({
        placeholder: PropTypes.string,
        search_keyUp_callback: PropTypes.func,
        search_item_callback: PropTypes.func,
        searchResultItems: PropTypes.array,
    })
};

export default SearchPage;