import React, { Component } from 'react';
import AppRoutes from './AppRoutes';
import './Hotels.css';

class Hotels extends Component {
  static defaultProps = {
    source: '2',
    jdlite: 0
  }

  render() {
    return (
      <div>
        {AppRoutes}
      </div>

    );
  }
}

export default Hotels;
