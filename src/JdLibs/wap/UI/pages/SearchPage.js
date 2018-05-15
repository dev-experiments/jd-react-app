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
            searchKeyUpCallback: () => { },
            searchItemLabels: {},
            clearSearchInputCallback: () => { }
        }
    }
    static propTypes = {
        searchInput: PropTypes.string,
        searchOptions: PropTypes.shape({
            placeholder: PropTypes.string,
            searchKeyUpCallback: PropTypes.func,
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
        this.keyUpHandle = this.keyUpHandle.bind(this);
    }

    keyUpHandle(e) {
        this.setState({ searchInput: e.target.value });
        if (this.props.searchOptions.searchKeyUpCallback) {
            this.props.searchOptions.searchKeyUpCallback(e.target);
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
            <input value={this.state.searchInput} name="searchInput" type="text" onChange={this.searchInputOnChange} onKeyUp={this.keyUpHandle} placeholder={this.props.searchOptions.placeholder} autoComplete="off" />
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