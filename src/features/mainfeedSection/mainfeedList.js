import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentsContainer } from '../commentsSection/commentsContainer';

export const MainfeedList = (props) => {

    return (
        <>
        <article className ="article_container">
            <div className="article_content_box">
                <br/>
             <a className="article_title" href={'https://www.reddit.com' + props.article.permalink} target='_blank'>
                {props.article.title}
            </a>
            <br/>
            <br/>
            {(props.article.url_overridden_by_dest &&
            props.article.url_overridden_by_dest.includes('i.redd.it')
                ) ?
            <img className="actual_image" src={props.article.url_overridden_by_dest} alt='post thumbnail' onerror='this.style.display = "none"'/>: ''} 
           
            </div>
            
                {/* <CommentsContainer postData = {props.article} subredditName ={props.subredditName} /> */}
            <br></br>
        </article>
        </>
    )
    // return(
    //     <h1>Hello</h1>
    // )
}