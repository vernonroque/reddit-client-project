import React, {useState,useEffect} from 'react';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import logo from './logo.svg';
import {FaReddit} from "react-icons/fa";
import { SubredditContainer } from './features/subredditSection/subredditContainer';
import {MainfeedContainer} from './features/mainfeedSection/mainfeedContainer';
import{useDispatch, useSelector} from 'redux'; 
import './App.css';

export const mainfeedSlice = createSlice({
  name: 'mainfeedArticles',
  initialState: {
    // Add initial state properties here.
    subreddits: [],
    isLoadingMainfeedArticles: false,
    failedToLoadMainfeedArticles: false
  },
  reducers:{
    startGetMainfeedArticles(state){
      state.isLoadingSubreddits = true;
      state.failedToLoadSubreddits = false;
    },
    getMainfeedArticlesSuccess(state,action){
      state.isLoadingSubreddits = false;
      state.subreddits = action.payload;
    },
    getMainfeedArticlesFailed(state){
      state.isLoadingSubreddits = false;
      state.failedToLoadSubreddits = true;
    }
  }
});

export const {
  getMainfeedArticlesFailed,
  getMainfeedArticlesSuccess,
  startGetMainfeedArticles
} = mainfeedSlice.actions;

export default mainfeedSlice.reducer;

//this is the async Thunk
export const loadMainfeedArticles = ()=> async ({subredditElement,dispatch}) => {

  const response = await fetch(`https://www.reddit.com/r/${subredditElement}.json`);
  const json = await response.json();
  const mainfeedArticles = json.data.children.map((element) => element.data.permalink);
  dispatch(getMainfeedArticlesSuccess(mainfeedArticles));
};



export const selectMainfeed = (state) => state.mainfeedArticles.mainfeedArticles;