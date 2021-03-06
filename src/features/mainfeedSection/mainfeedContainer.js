import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainfeed,loadMainfeedArticles,defaultMainfeedArticles,selectDefaultMainfeed } from './mainfeedSlice';
import {MainfeedList} from './mainfeedList'

export const MainfeedContainer = () => {

const dispatch = useDispatch();
const defaultMainfeed = useSelector(selectDefaultMainfeed);
const mainfeed = useSelector(selectMainfeed);


const [articles, setArticles] = useState([]);
  
 //const [subreddit,setSubreddit] = useState('');

 //used to get the default articles from r/popular at beginning of launch
useEffect(() => {
    if(articles.length===0)
        {
            dispatch(defaultMainfeedArticles());
                setArticles(defaultMainfeed);
        }
    else{
    dispatch(loadMainfeedArticles());
        console.log('mainfeed info',mainfeed);
    setArticles(mainfeed);
    }
},[dispatch,mainfeed,articles.length,defaultMainfeed]);

if(articles.length !== 0){
    console.log('articles', articles);
console.log('1st article permalink', articles[0].permalink);
}

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
        { (articles.length>0 && articles[0].subreddit_name_prefixed===articles[1].subreddit_name_prefixed) ? <h1>{articles[0].subreddit_name_prefixed}</h1> : <h1>r/popular</h1>
        }
        <article>
            {(articles!==null) ? articles.map((article,index)=> <MainfeedList key ={index} article={article} timestamp={article.created_utc}/>) :''
            
        }
                {/* <CommentsContainer postData = {props.article} subredditName ={props.subredditName} /> */}
            <br></br>
         </article>

        
        </>
    );
}