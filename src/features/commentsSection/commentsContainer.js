import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FaRegCommentAlt} from "react-icons/fa";
import { loadComments,selectComments } from './commentsSlice';
import {CommentList} from './commentList';


export const CommentsContainer = (props) => {
    const [commentsArr,setCommentsArr] = useState([]);
    
    const dispatch = useDispatch();
    //const comments = useSelector(selectComments);
   //console.log('comments from useSelector',useSelector(selectComments));
    

    // console.log('permalink',props.article.permalink);
    // console.log('the comments array', commentsArr);
    // const handleClick = () => {
    //     dispatch(loadComments(props.article.permalink));
    // }

    return(
        <>
        <div className="footer_items">
                <h2>Posted by: {props.article.author}</h2>
                {/* <h2>{hours}</h2> */}
                {/* <button onClick = {handleClick} className="comment_button">
                <FaRegCommentAlt size="1.7rem"/>
                </button> */}
                <div className='comments_section'>
                    <CommentList permalink = {props.article.permalink} />
                </div>
            
        </div>
        
        </>
    )
}