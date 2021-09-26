import { configureStore } from '@reduxjs/toolkit';
import { subredditsReducer } from '../features/subredditSection/subredditSlice';
import {createStore,combineReducers} from 'redux';
//import thunk from "redux-thunk";
//import { applyMiddleware } from "redux";


export const store = configureStore({
    reducer: {
          subreddits:subredditsReducer

    },
});

// export const store = createStore(combineReducers(
//     {
//       subreddits:subredditsReducer,
//     }
//   ),
//     undefined,
//     applyMiddleware(thunk)
//   );
