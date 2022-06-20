import React, {useState,useEffect} from 'react';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import{useDispatch, useSelector} from 'redux'; 

export const authorSlice = createSlice (
{
    name:'author',
    initalState:{
        author: [],
        isLoadingAuthor:false,
        failedToLoadAuthor:false
    },
    reducers:{
        startGetAuthor(state){
          state.isLoadingAuthor = true;
          state.failedToLoadAuthor = false;
        },
        getAuthorSuccess(state,action){
          state.isLoadingAuthor = false;
          state.author = action.payload;
        },
        getAuthorFailed(state){
          state.isLoadingAuthor = false;
          state.failedToLoadAuthor = true;
        }
      },
    }
);

export const {
    startGetAuthor,
    getAuthorSuccess,
    getAuthorFailed
} = authorSlice.actions;

export default authorSlice.reducer;

export const getAuthorNames = () => async(dispatch) => {
  
    
}