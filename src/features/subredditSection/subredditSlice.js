import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import React, {useState,useEffect} from 'react';

const LOAD_SUBREDDITS = 'subreddits/loadSubreddits';

export const loadSubreddits = ()=> async (dispatch) => {

  const response = await fetch(`https://www.reddit.com/r/popular.json`);
  const json = await response.json();
  dispatch(getSubreddits(json));

};

    const getSubreddits = (subreddits) => {
      return {
        type: LOAD_SUBREDDITS,
        payload: subreddits
      }
    }

    export const subredditsReducer = (state=[],action) => {
      switch(action.type){
        case LOAD_SUBREDDITS:
          return {
            ...action.payload
          }
        default: return state;

      }
    }

    export const subredditsSlice = createSlice({
        name: 'subreddits',
        initialState: {
          // Add initial state properties here.
          isLoadingSubreddits: false,
          failedToLoadSubreddits: false
        },
        // Add extraReducers here.
        extraReducers: {
          [loadSubreddits.pending]: (state,action) => {
            state.isLoadingSubreddits = true;
            state.failedToLoadSubreddits = false;
      
          },
          [loadSubreddits.fulfilled]: (state,action) => {
          //state.byArticleId[action.payload.articleId] = action.payload.comments;
          state.isLoadingSubreddits = false;
          state.failedToLoadSubreddits = false;
         
          },
          [loadSubreddits.rejected]: (state,action) => {
            state.isLoadingSubreddits = false;
          state.failedToLoadSubreddits = true;
          }
        }
      });

//export const selectSubreddits = (state) => state.comments.byArticleId;
//export const isLoadingSubreddits = (state) => state.comments.isLoadingComments;
export const subredditsList = (state) => state;

export default subredditsSlice.reducer;
