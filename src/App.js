import React from 'react';
import {FaReddit} from "react-icons/fa";
import { SubredditContainer } from './features/subredditSection/subredditContainer';
import {MainfeedContainer} from './features/mainfeedSection/mainfeedContainer';
import './App.css';

function App() {

  // const [articles, setArticles] = useState([]);
  
  // const [subreddit,setSubreddit] = useState('');

  //   useEffect(() => {

  //       const fetchRedditArticles = async() => {

  //        const redditArticles = await fetch ('https://www.reddit.com/r/pokemon.json');
  //        const json = await redditArticles.json();
  //        setArticles(json.data.children);
  //        console.log(articles);

  //        setSubreddit(json.data.children[0].data.subreddit_name_prefixed);

  //       }
  //       fetchRedditArticles();
  //   },[subreddit]);
    
  
  // return (
  // <>
  //   <header className ="App-header">
  //     <div className="logo_background">
  //     <FaReddit size="2rem"/>
  //     </div>
  //     <div className="title">Reddit Minimal</div>
  //   </header>
  //   <body className="body_section">
  //     <main className="main_section">
  //       <h1>This is the main section</h1>
  //       {
  //         (articles!==null) ? articles.map((article,index) => 
  //         <MainfeedContainer key={index} article={article.data} subredditName={subreddit}/>):''
  //       }
  //     </main>
  //     <aside>
  //     <SubredditContainer/>
  //     </aside>
  //   </body>
  // </>
  // );

    return(
    <>
      <header className ="App-header">
        <div className="logo_background">
          <FaReddit size="2rem"/>
        </div>
        <div className="title">Reddit Minimal</div>
      </header>
        <body className="body_section">
            <main className="main_section">
              <MainfeedContainer/>
           </main>
           <aside>
              <SubredditContainer/>
           </aside>
        </body>
      </>

    );
}
export default App;
