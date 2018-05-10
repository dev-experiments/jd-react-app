import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

export default withRouter(Hotels);
