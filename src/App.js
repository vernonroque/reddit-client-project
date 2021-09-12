import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import {FaReddit} from "react-icons/fa";
import { SubredditContainer } from './features/subredditSection/subredditContainer';
import {MainfeedContainer} from './features/mainfeedSection/mainfeedContainer';

import './App.css';

function App() {

  /*
  useEffect(() => {
    fetch('https://www.reddit.com/r/pokemon.json')
    .then(fetchedData =>{
      if(fetchedData.status !==200){
        console.log('error');
        return;
      }
      fetchedData.json().then(data=>{
        console.log(data.data.children);
      });
    })
  });*/

  const [articles, setArticles] = useState([]);
  //const [id,setId] = useState('');
  const [subreddit,setSubreddit] = useState('');
  //const [firstPostComment, setFirstPostComment] = useState([]);

    useEffect(() => {

        const fetchRedditArticles = async() => {

         const redditArticles = await fetch ('https://www.reddit.com/r/pokemon.json');
         const json = await redditArticles.json();
         setArticles(json.data.children);

         
         //const articleComments = json.data.children[0].data.permalink;
         //console.log(articleComments);

        // setId(json.data.children[0].data.id);
         //console.log(id);

         setSubreddit(json.data.children[0].data.subreddit_name_prefixed);
         //console.log(subreddit);

        // const redditComments = await fetch(`https://www.reddit.com/${subreddit}/comments/${id}.json`);
         //const json_2 = await redditComments.json();
         //setFirstPostComment(json_2[0].data);

        }
        fetchRedditArticles();
    },[subreddit]);
    
    //console.log(articles);
  
  return (
  <>
    <header className ="App-header">
      <div className="logo_background">
      <FaReddit size="2rem"/>
      </div>
      <div className="title">Reddit Minimal</div>
    </header>
    <body className="body_section">
      <main className="main_section">
        <h1>This is the main section</h1>
        {
          (articles!==null) ? articles.map((article,index) => 
          <MainfeedContainer key={index} article={article.data} subredditName={subreddit}/>):''
        }
      </main>
      <aside>
      <SubredditContainer/>
      </aside>
    </body>
  </>
    
  );
}

export default App;
