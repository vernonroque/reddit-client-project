import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubreddits,selectSubreddits } from './subredditSlice';
import { SubredditList } from './subredditList';
import { copyDefaultMainfeedState } from './subredditSlice'; // Import the action
import { selectDefaultMainfeed } from '../mainfeedSection/mainfeedSlice';



export const SubredditContainer = () => {

const dispatch = useDispatch();

const subreddits = useSelector(selectSubreddits);
const mainFlag = useSelector(selectDefaultMainfeed);
//const[dispatchOnce,setDispatchOnce] = useState(false);

//const staticSubs = [...subreddits];

//const [call,setCall] = useState(true);
console.log("The mainFlag stuff", mainFlag);
console.log('subreddit info',subreddits);
useEffect(() => {
    // Dispatch the action to copy the state

        console.log('loading');
       dispatch(loadSubreddits());

        
  }, [dispatch]);



// useEffect(() => {
//     dispatch(loadSubreddits());
// },[dispatch]);

//const [loaded,setLoaded] =useState(false);

// useEffect(()=>{
//   if(loaded) return;
//    subreddits && setLoaded(true)
//   },[subreddits, loaded]);

//   useEffect(()=>{
//       console.log('subreddits');
//   },[subreddits])

//   useEffect(()=>{
//       console.log('subreddits');
//   },[subreddits])
  
    /*
    const [icon,setIcon] = useState();
    const [subRedditName,setSubRedditName] = useState();

    /*useEffect(() => {
        const fetchSubredditIcon = async() => {
            const subredditIcon = await fetch('https://www.reddit.com/r/pokemon/about.json');
            const json = await subredditIcon.json();
            setIcon(json.data.header_img);
        }
        fetchSubredditIcon();

    },[]);*/
    
    return(
        <>
        <section className="subreddit_container">
            <h1 className="subreddits_title">Subreddits</h1>
            <div>
                { subreddits.length>0 && subreddits.map((element,index)=>
                    <SubredditList key={index} className="subreddit_name" subredditElement ={element.subreddit} />
                )}
                {/* <img className='subreddit_icon' src = {icon} alt ="subreddit logo"/>
                <h2 className='subreddit_name'>{}</h2> */}
            </div>
        </section>
        </>
    );
} 