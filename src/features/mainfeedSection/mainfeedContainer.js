import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentsContainer } from '../commentsSection/commentsContainer';
import { selectMainfeed,loadMainfeedArticles } from './mainfeedSlice';
import {MainfeedList} from './mainfeedList'

export const MainfeedContainer = () => {

const dispatch = useDispatch();
const mainfeed = useSelector(selectMainfeed);


const [articles, setArticles] = useState([]);
  
 //const [subreddit,setSubreddit] = useState('');

useEffect(() => {

    dispatch(loadMainfeedArticles());
        console.log('mainfeed info',mainfeed);
    setArticles(mainfeed);
},[dispatch,mainfeed]);

console.log('articles', articles)


    // return(
    //     <>
    //     <article>
    //         {(props.article.thumbnail ==='self') ? '': <img src={props.article.thumbnail} alt='post thumbnail'/>}
    //         <a href={'https://www.reddit.com' + props.article.permalink} target='_blank'>
    //             {props.article.title}
    //         </a>
    //             {/* <CommentsContainer postData = {props.article} subredditName ={props.subredditName} /> */}
    //         <br></br>
    //     </article>
    //     </>
    // );

    return(
        <>
        { (articles.length>0) ? <h1>{articles[0].subreddit_name_prefixed}</h1>  : ''
        }
        <article>
            {(articles!==null) ? articles.map((article,index)=> <MainfeedList key ={index} article={article}/>) :''
            
        }
                {/* <CommentsContainer postData = {props.article} subredditName ={props.subredditName} /> */}
            <br></br>
         </article>
        
        </>
    );
}