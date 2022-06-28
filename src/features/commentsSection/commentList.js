import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {selectMainfeed} from '../mainfeedSection/mainfeedSlice';
import {CommentItem} from './commentItem';

import {FaRegCommentAlt} from "react-icons/fa";

export const CommentList = (props) => {

    const mainfeed = useSelector(selectMainfeed);
    // const comments = useSelector(selectComments);

    const [comments,setComments] = useState([]);
    const [show,setShow] = useState(false);

    useEffect(() => {
        setShow(false);
    },[mainfeed])

   
    const handleClick = async(permalink) => {

        if(show){
            setShow(false);
            return;
        }
            const response = await fetch(`https://www.reddit.com${permalink}.json`);
            const json = await response.json();
      
              if(response.ok){
                //console.log('json response',json[1].data);
                const commentsList = json[1].data.children.map(element => element.data.body);
                // console.log('the comments list', commentsList);
                //console.log(dispatch(getCommentsSuccess(commentsList)));
                setComments(commentsList);
                
                setShow(true);
              }
    }
    // console.log('the comments',comments);

    return (
        <>
        <button onClick = {() => handleClick(props.permalink)} className="comment_button">
                <FaRegCommentAlt size="1.7rem"/>
        </button>
        <div className = "comments_subsection">
        {(show) ? comments.map((element,index) => {
        if(element) return <CommentItem key ={index} comment = {element}/> }): ''}
        </div>

        </>
    )

}