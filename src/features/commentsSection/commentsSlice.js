import { createSlice,current} from '@reduxjs/toolkit';

export const commentsSlice = createSlice (
{
    name:'comments',
    initialState:{
        comments: [],
        isLoadingComments:false,
        failedToLoadComments:false
    },
    reducers:{
        startGetComments(state){
          state.isLoadingComments = true;
          state.failedToLoadComments = false;
        },
        getCommentsSuccess(state,action){
          state.isLoadingComments = false;
          state.comments = action.payload;
          console.log('the current state',current(state));
        },
        getCommentsFailed(state){
          state.isLoadingComments = false;
          state.failedToLoadComments = true;
        }
        
      },
    }
);

export const {
    startGetComments,
    getCommentsSuccess,
    getCommentsFailed
} = commentsSlice.actions;

export default commentsSlice.reducer;


export const loadComments = (permalink) => async(dispatch) => {

    if(permalink !== undefined){
      console.log('the permalink',permalink);
      const response = await fetch(`https://www.reddit.com${permalink}.json`);
      const json = await response.json();

        if(response.ok){
          //console.log('json response',json[1].data);
          const commentsList = json[1].data.children.map(element => element.data.body);
          // console.log('the comments list', commentsList);
          dispatch(getCommentsSuccess(commentsList));
          //console.log(dispatch(getCommentsSuccess(commentsList)));
        }
    }
}

 export const selectComments = (state) => state.comments.comments;



