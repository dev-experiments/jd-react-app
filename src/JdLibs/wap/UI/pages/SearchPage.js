import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchPageList from './SearchPageList';

import './SearchPage.css';

class SearchPage extends Component {
    static defaultProps = {
        searchItems: [],
        searchOptions: {
            placeholder: '',
            searchItemCallback: () => { },
            searchKeyUpCallback: () => { },
            searchItemLabels: {}
        }
    }
    static propTypes = {
        searchOptions: PropTypes.shape({
            placeholder: PropTypes.string,
            searchKeyUpCallback: PropTypes.func,
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    keyUpHandle(e) {
        this.setState({ searchInput: e.target.value });
        if (this.props.searchOptions.searchKeyUpCallback) {
            this.props.searchOptions.searchKeyUpCallback(e.target.value);
        }
    }
    searchInputOnChange(e) {
        this.setState({ searchInput: e.target.value });
    }
    clearTextHandle() {
        this.setState({ searchInput: '' });
    }
    render() {
        const search = <div className="srchhtl">
            <span className="icon-search"></span>
            <input value={this.state.searchInput} name="searchInput" type="text" onChange={(e) => { this.searchInputOnChange(e) }} onKeyUp={(e) => { this.keyUpHandle(e) }} placeholder={this.props.searchOptions.placeholder} autoComplete="off" />
            <span className="cls_otr" onClick={(e) => { this.clearTextHandle(e) }} >
                <span className="icon-close"></span>
            </span>
        </div>;
        return (
            <div className="htldestsrch mrgfxd">
                {search}
                <SearchPageList listItems={this.props.searchItems} itemLabelMap={this.props.searchOptions.searchItemLabels} itemCallback={this.props.searchOptions.searchItemCallback} />
            </div>
        );
    }
}

export default SearchPage;