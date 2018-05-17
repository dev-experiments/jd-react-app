import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchPageList from './SearchPageList';

import './SearchPage.css';

class SearchPage extends Component {
    static defaultProps = {
        searchItems: [],
        searchInput: '',
        searchOptions: {
            placeholder: '',
            searchItemCallback: () => { },
            searchInputChangeCallback: () => { },
            searchItemLabels: {},
            clearSearchInputCallback: () => { }
        }
    }
    static propTypes = {
        searchInput: PropTypes.string,
        searchOptions: PropTypes.shape({
            placeholder: PropTypes.string,
            searchInputChangeCallback: PropTypes.func,
            clearSearchInputCallback: PropTypes.func,
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            searchInput: this.props.searchInput
        }
        this.searchInputOnChange = this.searchInputOnChange.bind(this);
        this.clearTextHandle = this.clearTextHandle.bind(this);
        this.inputChangeHandle = this.inputChangeHandle.bind(this);
    }

    inputChangeHandle(e) {
        this.setState({ searchInput: e.target.value });
        if (this.props.searchOptions.searchInputChangeCallback) {
            this.props.searchOptions.searchInputChangeCallback(e.target);
        }
    }
    searchInputOnChange(e) {
        this.setState({ searchInput: e.target.value });
    }
    clearTextHandle(e) {
        this.setState({ searchInput: '' });
        if (this.props.searchOptions.clearSearchInputCallback) {
            this.props.searchOptions.clearSearchInputCallback(e);
        }
    }
    render() {
        const search = <div className="srchhtl">
            <span className="icon-search"></span>
            <input value={this.state.searchInput} name="searchInput" type="text" onChange={this.searchInputOnChange} onKeyUp={this.inputChangeHandle} placeholder={this.props.searchOptions.placeholder} autoComplete="off" />
            <span className="cls_otr" onClick={this.clearTextHandle} >
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