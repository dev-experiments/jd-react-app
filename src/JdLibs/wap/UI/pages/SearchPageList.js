import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchPage.css';

class SearchPageList extends Component {
    static defaultProps = {
        list_items: [],
        item_callback: () => { }
    }
   /*  constructor(props) {
        super(props);
    } */
    itemClickHandle(item) {
        if (this.props.item_callback) this.props.item_callback(item);
    }
    list(list) {
        return list.map((item, index) =>
            <li key={index} onClick={(e)=>{this.itemClickHandle(e)}}>
                <a>
                    <span className="adrswp">
                        <span className="htlsrarea">{item.text}</span>
                        <span className="htlsrcity">{item.sub_text}</span>
                    </span>
                </a>
            </li >
        );
    }
    render() {

        return (
            this.props.list_items.map((item, index) => {
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

SearchPageList.propTypes = {
    list_items: PropTypes.array.isRequired,
    item_callback: PropTypes.func
};

export default SearchPageList;