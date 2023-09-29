import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadMainfeedArticles } from '../mainfeedSection/mainfeedSlice';
import redditLogo from '../../reddit-logo-copy.png'

export const SubredditList = (props) => {
     const[icon,setIcon] = useState('');
     const dispatch = useDispatch();

     
    useEffect(() => {

        
        const fetchSubredditIcon = async() => {
            const subredditIcon = await fetch(`https://www.reddit.com/r/${props.subredditElement}/about.json`);

            
                console.log(subredditIcon);

            const json = await subredditIcon.json();
            if(json.data.icon_img==="")
                setIcon(json.data.header_img);
            else if(json.data.icon_img===false && json.data.header_img===false)
                setIcon('');
            else
                setIcon(json.data.icon_img);
        }
        fetchSubredditIcon();
        //console.log("icon",icon);

    },[props.subredditElement]);

    return (
        <ul className="subredditListContainer">
            <br></br>
            <li key={props.index} className="subredditList">
                <button onClick= {(e) => dispatch(loadMainfeedArticles(props.subredditElement))} className="subreddit_button">
                {(!icon) ? <img className='subreddit_icon' src={redditLogo} alt='subreddit thumbnail'/>: <img className='subreddit_icon' src={icon} alt='subreddit thumbnail'/>}
                    {props.subredditElement}
                </button>
                
            </li>
            <br></br>
            
        </ul>
    )
} 

// onClick={(e) => dispatch(loadCurrentArticle(article.id))} 