import React from 'react';
import logo from './logo.svg';
import {FaReddit} from "react-icons/fa";
import { SubredditContainer } from './features/subredditSection/subredditContainer';

import './App.css';

function App() {
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
        <h2>Hello, this is the main section</h2>
      </main>
      <aside>
      <SubredditContainer/>
      </aside>
    </body>

    
  </>
    
  );
}

export default App;
