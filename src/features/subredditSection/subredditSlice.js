import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import React, {useState,useEffect} from 'react';


//const LOAD_SUBREDDITS = 'subreddits/loadSubreddits';

// export const loadSubreddits = ()=> async (dispatch) => {

//   const response = await fetch(`https://www.reddit.com/r/popular.json`);
//   const json = await response.json();
//   dispatch(getSubreddits(json.data.children));

// };
// export const loadSubreddits = ()=> async (dispatch) => {

//   const response = await fetch(`https://www.reddit.com/r/popular.json`);
//   const json = await response.json();
//   const subreddits = json.data.children.map((element) => element.data);
//   dispatch(getSubreddits(subreddits));
// };

//     const getSubreddits = (subreddits) => {
//       return {
//         type: LOAD_SUBREDDITS,
//         payload: subreddits
//       }
//     }

//     export const subredditsReducer = (state=[],action) => {
//       switch(action.type){
//         case LOAD_SUBREDDITS:
//           return {
//             ...action.payload
//           }
//         default: return state;

//       }
//     }
    export const subredditsSlice = createSlice({
        name: 'subreddits',
        initialState: {
          // Add initial state properties here.
          subreddits: [],
          isLoadingSubreddits: false,
          failedToLoadSubreddits: false
        },
        reducers:{
          startGetSubreddits(state){
            state.isLoadingSubreddits = true;
            state.failedToLoadSubreddits = false;
          },
          getSubredditsSuccess(state,action){
            state.isLoadingSubreddits = false;
            state.subreddits = action.payload;
          },
          getSubredditsFailed(state){
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = true;
          }
        }
      });

      export const {
        getSubredditsFailed,
        getSubredditsSuccess,
        startGetSubreddits
      } = subredditsSlice.actions;

      export default subredditsSlice.reducer;

      //this is the async Thunk
      export const loadSubreddits = ()=> async (dispatch) => {

        const response = await fetch(`https://www.reddit.com/r/popular.json`);
        const json = await response.json();
        const subreddits = json.data.children.map((element) => element.data);
        dispatch(getSubredditsSuccess(subreddits));
      };


export const selectSubreddits = (state) => state.subreddits.subreddits;


