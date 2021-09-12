import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentsContainer } from '../commentsSection/commentsContainer';

export const MainfeedContainer = (props) => {
    
    return(
        <>
        <article>
            {(props.article.thumbnail ==='self') ? '': <img src={props.article.thumbnail} alt='post thumbnail'/>}
            <a href={'https://www.reddit.com' + props.article.permalink} target='_blank'>
                {props.article.title}
            </a>
                <CommentsContainer postData = {props.article} subredditName ={props.subredditName} />
            <br></br>
        </article>


        </>



    );


}