import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer  from '../features/subredditSection/subredditSlice';
import mainfeedReducer from '../features/mainfeedSection/mainfeedSlice';
import commentsReducer from  '../features/commentsSection/commentsSlice';
import {createStore,combineReducers} from 'redux';
//import thunk from "redux-thunk";
//import { applyMiddleware } from "redux";


export const store = configureStore({
    reducer: combineReducers({
          subreddits:subredditsReducer,
          mainfeedArticles:mainfeedReducer,
          comments:commentsReducer
    })
});

// export const store = createStore(combineReducers(
//     {
//       subreddits:subredditsReducer,
//     }
//   ),
//     undefined,
//     applyMiddleware(thunk)
//   );
