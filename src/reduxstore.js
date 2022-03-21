import { configureStore } from "@reduxjs/toolkit";
import  { reducer as counterReducer } from './pages/Redux/counter';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});