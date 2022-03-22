import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'




// recoil state
import { RecoilRoot } from "recoil";

// mobx state
// import { Provider } from "mobx-react";
// import CounterStore from "./mobxstore";

// redux state
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducer from './store/reducer';
// import {store} from './reduxstore'

const store = createStore(reducer);

ReactDOM.render(

  // redux
  <Provider store={store}>
    <App />
  </Provider>,

  // recoil
  //  <RecoilRoot>
  //  <App />
  // </RecoilRoot>,

  // mobx
  // <Provider counter={new CounterStore()}>
  // <App />
  // </Provider>,

  document.getElementById('root')
)
