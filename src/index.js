import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// redux state
// import { Provider } from 'react-redux'
// import store from './reduxstore'

// recoil state
import { RecoilRoot } from "recoil";

ReactDOM.render(

  // redux

  // <Provider store={store}>
  //   <App />
  // </Provider>,

  // recoil
   <RecoilRoot>
   <App />
 </RecoilRoot>,



  document.getElementById('root')
)
