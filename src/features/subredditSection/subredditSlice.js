import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const loadSubreddits = createAsyncThunk(
    'subreddits/loadSubreddits',
    async () =>{
      const response = await fetch(`https://www.reddit.com/r/popular.json`);
      const json = await response.json();
      console.log(json.data.children);
      
      }
    );

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

export const selectSubreddits = (state) => state.comments.byArticleId;
export const isLoadingSubreddits = (state) => state.comments.isLoadingComments;

export default subredditsSlice.reducer;