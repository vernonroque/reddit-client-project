import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const SubredditContainer = () => {
    const [icon,setIcon] = useState();
    const [subRedditName,setSubRedditName] = useState();

    useEffect(() => {
        const fetchSubredditIcon = async() => {
            const subredditIcon = await fetch('https://www.reddit.com/r/pokemon/about.json');
            const json = await subredditIcon.json();
            //console.log(json.data.header_img);
            setIcon(json.data.header_img);
        }
        fetchSubredditIcon();

        const fetchRedditInfo = async() => {
            const redditInfo = await fetch('https://www.reddit.com/r/pokemon.json');
            const json = await redditInfo.json();
            console.log(json.data.children[0].data.subreddit);
            setSubRedditName(json.data.children[0].data.subreddit);
          }
          fetchRedditInfo();
    },[]);
    
    return(
        <>
        <section className="subreddit_container">
            <h1 className="subreddits_title">Subreddits</h1>
            <div className = 'subreddit_button'>
                <img className='subreddit_icon' src = {icon} alt ="subreddit logo"/>
                <h2 className='subreddit_name'>{subRedditName}</h2>
            </div>

        </section>
        </>
    );
} 