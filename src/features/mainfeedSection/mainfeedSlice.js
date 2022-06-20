import React, {useState,useEffect} from 'react';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import{useDispatch, useSelector} from 'redux'; 


export const mainfeedSlice = createSlice({
  name: 'mainfeedArticles',
  initialState: {
    // Add initial state properties here.
    mainfeedArticles: [],
    isLoadingMainfeedArticles: false,
    failedToLoadMainfeedArticles: false
  },
  reducers:{
    startGetMainfeedArticles(state){
      state.isLoadingMainfeedArticles = true;
      state.failedToLoadMainfeedArticles = false;
    },
    getMainfeedArticlesSuccess(state,action){
      state.isLoadingMainfeedArticles = false;
      state.mainfeedArticles = action.payload;
    },
    getMainfeedArticlesFailed(state){
      state.isLoadingMainfeedArticles = false;
      state.failedToLoadMainfeedArticles = true;
    }
  }
});

export const {
  getMainfeedArticlesFailed,
  getMainfeedArticlesSuccess,
  startGetMainfeedArticles
} = mainfeedSlice.actions;

export default mainfeedSlice.reducer;

//this is the async Thunk for default articles
export const defaultMainfeedArticles = ()=> async (dispatch) => {

  //console.log(subredditElement);

  const response = await fetch(`https://www.reddit.com/r/popular.json`);
  const json = await response.json();
  // console.log('json data',json);
  // console.log('total response value',response);
  if(response.ok)
    {
    const mainfeedArticles = json.data.children.map((element) => element.data);
    console.log('Mainfeed Articles', mainfeedArticles);
    dispatch(getMainfeedArticlesSuccess(mainfeedArticles));
    }
  
};

//this is the async Thunk
export const loadMainfeedArticles = (subredditElement)=> async (dispatch) => {

  // console.log(subredditElement);

  const response = await fetch(`https://www.reddit.com/r/${subredditElement}.json`);
  const json = await response.json();
  // console.log('json data',json);
  if(response.ok)
    {
    const mainfeedArticles = json.data.children.map((element) => element.data);
    // console.log('Mainfeed Articles', mainfeedArticles);
    dispatch(getMainfeedArticlesSuccess(mainfeedArticles));
    }
};

export const selectDefaultMainfeed =(state) => state.mainfeedArticles.mainfeedArticles;
export const selectMainfeed = (state) => state.mainfeedArticles.mainfeedArticles;

