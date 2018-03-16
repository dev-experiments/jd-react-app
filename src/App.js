import React, { Component } from 'react';
import Hotels from './Hotels';

import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
// import { initialState } from './store/initialState';

const Store = configureStore();
console.log(Store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Hotels></Hotels>
      </Provider>
    );
  }
}

export default App;
