import React, { Component } from 'react';
import './SearchSkull.css';

class SearchSkull extends Component {
    render() {
        return (
            <div className="post">
                {/*  <div className="avatar"></div> */}
                <div className="line flLft"></div>
                <div className="line shortline flLft"></div>
                <div className="line shortline flrt"></div>
                <div className="line flLft"></div>
                <div className="btnLine flLft"></div>
            </div>
        );
    }
}

export default SearchSkull;
