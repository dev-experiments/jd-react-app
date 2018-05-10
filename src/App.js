import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import Hotels from './Hotels';


import configureStore from './store/configureStore';
// import { initialState } from './store/initialState';

const Store = configureStore();
console.log(Store.getState());


class App extends Component {
  render() {
    return (<Provider store={Store}>
      <Router>
        <Hotels></Hotels>

      </Router>
    </Provider>
    );
  }
}

export default App;
