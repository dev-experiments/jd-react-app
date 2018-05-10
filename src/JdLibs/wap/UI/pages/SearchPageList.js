import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchPage.css';

class SearchPageList extends Component {
    static defaultProps = {
        listItems: [],
        itemLabelMap: { text: 'text', sub_text: 'sub_text' },
        itemCallback: () => { }
    }
    static propTypes = {
        itemLabelMap: PropTypes.object,
        listItems: PropTypes.array,
        itemCallback: PropTypes.func
    }
    /* constructor(props) {
        super(props);
    }  */
    itemClickHandle(item) {
        if (this.props.itemCallback) this.props.itemCallback(item);
    }
    list(list) {
        return list.map((item, index) =>
            <li key={index} onClick={(e) => { this.itemClickHandle(e) }}>
                <a>
                    <span className="adrswp">
                        <span className="htlsrarea">{item[this.props.itemLabelMap.text]}</span>
                        <span className="htlsrcity">{item[this.props.itemLabelMap.sub_text]}</span>
                    </span>
                </a>
            </li >
        );
    }
    render() {

        return (
            this.props.listItems.map((item, index) => {
                return (<div className="htlsrchdta" key={index} >
                    <span className="srchtitl" id="recent_srch">{item.title}</span>
                    <ul className="htlcitydta">
                        {this.list(item.items)}
                    </ul>
                </div>);
            })
        );
    }
}

export default SearchPageList;