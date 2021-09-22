import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const CommentsContainer = (props) => {
    const [firstComment,setFirstComment] =useState('');
    
    //console.log(props.postData.id);

    useEffect(()=>{
        const fetchFirstComment = async() => {
            const fetchCommentData = await fetch(`https://www.reddit.com/${props.subredditName}/comments/${props.postData.id}/.json`);
            const json = await fetchCommentData.json();
            setFirstComment(json[1].data.children[0].data.body);
            //console.log(json[1].data.children[0].data.body);
            
    
        }
        fetchFirstComment();
    });
    
    

    return(

        <>
        <div className='comments_section'>
                    <h2>First Comment:</h2>
                    <p>{firstComment}</p>
                </div>

        </>
    )
}