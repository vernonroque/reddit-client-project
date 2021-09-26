import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubreddits,selectSubreddits } from './subredditSlice';

export const SubredditContainer = () => {

const dispatch = useDispatch();
const subreddits= useSelector(selectSubreddits);
console.log('subreddit info',subreddits);

const [loaded,setLoaded] = useState(false);


useEffect(() => {
    dispatch(loadSubreddits());
},[dispatch]);

useEffect(()=>{
  if(loaded) return;
   subreddits && setLoaded(true)
  },[subreddits, loaded]);

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

        const fetchRedditInfo = async() => {
            const redditInfo = await fetch('https://www.reddit.com/r/pokemon.json');
            const json = await redditInfo.json();
            console.log(json.data.children[0].data.subreddit);
            setSubRedditName(json.data.children[0].data.subreddit);
          }
          fetchRedditInfo();
    },[]);*/
    
    return(
        <>
        <section className="subreddit_container">
            <h1 className="subreddits_title">Subreddits</h1>
            <div className = 'subreddit_button'>
                    {/* {
                    subreddits.map((element) =>{
                       return (
                            <h2 className ='subreddit_name'>{element.data.subreddit}</h2>
                         )
                     })
                    
                }  */}
                { subreddits.length>0 && subreddits.map((element,index)=> {
                    return (
                        <>
                        <h2 key={index} className ='subreddit_name'>{element.data.subreddit}</h2>
                        <br></br>
                        </>
        
                    )
                })}
                {/* <img className='subreddit_icon' src = {icon} alt ="subreddit logo"/>
                <h2 className='subreddit_name'>{}</h2> */}
            </div>

        </section>
        </>
    );
} 