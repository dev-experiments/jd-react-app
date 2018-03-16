import React, { Component } from 'react';
import MainHeader from './containers/headers/MainHeader';
import SearchSkull from './components/search/SearchSkull';
import './Hotels.css';

class Hotels extends Component {
  static defaultProps = {
    source: '2',
    jdlite: 0
  }

  render() {
    let header = <MainHeader source={this.props.source}></MainHeader>;
    let skull = <SearchSkull></SearchSkull>;
    return (
      <div>
        {header}
        <div className="skullContainer">
          {skull}
        </div>
      </div>

    );
  }
}

export default Hotels;
