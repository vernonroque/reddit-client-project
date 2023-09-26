import React, {useState,useEffect} from 'react';
import {FaReddit} from "react-icons/fa";
import { SubredditContainer } from './features/subredditSection/subredditContainer';
import {MainfeedContainer} from './features/mainfeedSection/mainfeedContainer';
import './App.css';

function App() {

  const CryptoJS = require('crypto-js');
  const [redditToken,setRedditToken] = useState('');
  const [accessCode,setAccessCode] = useState('');
  const [calledRedirect,setCalledRedirect] = useState(false);

  const clientId = process.env.REACT_APP_REDDIT_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_REDDI_CLIENT_SECRET;
  const username = process.env.REACT_APP_REDDIT_USERNAME;
  const password = process.env.REACT_APP_REDDIT_PASSWORD;


const clientIdAndSecret = `${clientId}:${clientSecret}`;
const base64ClientIdAndSecret = btoa(clientIdAndSecret); // Base64 encode client ID and secret

const randomBytes = CryptoJS.lib.WordArray.random(16); // 16 bytes for a random value
const randomHex = randomBytes.toString(CryptoJS.enc.Hex);
console.log("randomHex>>>",randomHex);

// console.log("clientId>>>",clientId)
// console.log("secret>>>",clientSecret)
// console.log("username>>>",username);
// console.log("password>>>",password);

const tokenUrl = 'https://www.reddit.com/api/v1/access_token';

const data = new URLSearchParams();
data.append('grant_type', 'password');
data.append('username', username);
data.append('password', password);

console.log('the data >>>', data);

const tokenHeaders = {
  'Authorization': `Basic ${base64ClientIdAndSecret}`,
  'Content-Type': 'application/x-www-form-urlencoded',
};
console.log("tokenHeaders>>>",tokenHeaders);
const settings = {
  method:'POST',
  headers:tokenHeaders,
}
// Construct the Reddit authorization URL with your parameters
      //const clientId = 'YOUR_CLIENT_ID';
      const responseType = 'code';
      const state = randomHex;
      const redirectUri = 'http://localhost:3000/';
      const duration = 'permanent'; // 'temporary' or 'permanent' if needed
      const scope = 'read';

      //const redditAuthUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=${responseType}&state=${state}&redirect_uri=${redirectUri}&duration=${duration}&scope=${scope}`;
        
      // Redirect the user to the Reddit authorization page
      //window.location.replace(redditAuthUrl);
      //window.stop(); ///use this to keep the page from reloading

      ///don't put window.location.href in a useEffect hook. and use window.location.href
      //with window.stop();

       const urlParams = new URLSearchParams(window.location.search);
       const code = urlParams.get('code');
        console.log("Access code >>>",code);
     

  useEffect(()=>{

    const redirectToReddit = () => {
      
         const redditAuthUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=${responseType}&state=${state}&redirect_uri=${redirectUri}&duration=${duration}&scope=${scope}`;
        
      //   // Redirect the user to the Reddit authorization page
        window.location.href = redditAuthUrl;
  
      // const urlParams = new URLSearchParams(window.location.search);
      // const code = urlParams.get('code');
      
      // if(code){
      //   console.log("Access code >>>",code);
      //   setAccessCode(code);
      // }
    };

    // const getRedditToken = async()=>{

    //   const response = await fetch(tokenUrl,data,settings);
      
    //   console.log('the response >>>', response)
    //   if (!response.ok) {
    //     console.error('Failed to get Reddit token:', response.status, response.statusText);
    //     const errorResponse = await response.json();
    //     console.error('Error response:', errorResponse);
    //   } else {
    //     const responseData = await response.json();
    //     console.log('Response data:', responseData);
    //     setRedditToken(responseData.access_token);
    //   }

    // }

    // if(!calledRedirect);
    redirectToReddit();

    
    //getRedditToken();

  },[])

  function handleClick(){
    const responseType = 'code';
      const state = randomHex;
      const redirectUri = 'http://localhost:3000/';
      const duration = 'permanent'; // 'temporary' or 'permanent' if needed
      const scope = 'read';

      const redditAuthUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=${responseType}&state=${state}&redirect_uri=${redirectUri}&duration=${duration}&scope=${scope}`;
        
      //   // Redirect the user to the Reddit authorization page
         window.location.href = redditAuthUrl;
  
       const urlParams = new URLSearchParams(window.location.search);
       const code = urlParams.get('code');
      
        setAccessCode(code);
  }

  console.log("Access code >>>",code);

  
  
    return(
    <>
      <header className ="App-header">
      <button onClick={handleClick}>Click here to authenticate</button>
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
