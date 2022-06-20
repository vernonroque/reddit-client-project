import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FaRegCommentAlt} from "react-icons/fa";
import { loadComments,selectComments } from './commentsSlice';


export const CommentsContainer = (props) => {
    const [commentsArr,setCommentsArr] =useState([]);
    
    //console.log(props.postData.id);
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
   // console.log('comments from useSelector',useSelector(selectComments));
    
    useEffect(() => {

        dispatch(loadComments(props.article.permalink));
        setCommentsArr(comments);
    },commentsArr)

    console.log('the comments array', commentsArr);

    

    // useEffect(() => {

    //     setCommentsArr(comments);

    // },commentsArr.length)
    
    
    return(
        <>
        <div className="footer_items">
                <h2>{props.article.author}</h2>
                {/* <h2>{hours}</h2> */}
                <button onClick = {()=> dispatch(loadComments(props.article.permalink))} className="comment_button">
                <FaRegCommentAlt size="1.7rem"/>
                </button>
            </div>
            <div className='comments_section'>
                    <h2>First Comment:</h2>
                    {commentsArr !== undefined ? <p>{commentsArr[0]}</p> : '' }
                    
        </div>
        
        </>
    )
}