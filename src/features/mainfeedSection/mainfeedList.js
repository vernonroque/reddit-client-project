import React from 'react';
import { CommentsContainer } from '../commentsSection/commentsContainer';

export const MainfeedList = (props) => {


    // const [hours,setHours] = useState([]);
    // const [dateObj,setDateObj] = useState([]);
    
    // setDateObj(new Date(props.article.created_utc * 1000));
    // console.log(dateObj);
    // setHours(dateObj.getUTCHours().toString().padStart(2,0));

    // let dateObj = [];
    // dateObj = new Date(props.article.created_utc * 1000);
    // console.log(`${props.article.subreddit}`,dateObj);

    //console.log('timestamp: ', props.timestamp);

    // let dateObj = '';
    // dateObj = new Date(props.article.created_utc * 1000);

    //let hours = dateObj.getUTCHours().toString().padStart(2,0);

    // console.log('dateObj: ', dateObj);
    // useEffect(() => {
    //     if(props.article !== undefined){
    //         dispatch(loadComments(props.article.permalink));
    //     }
        
    //  })

    return (
        <>
        <article className ="article_container">
            <div className="article_content_box">
                <br/>
                <a className="article_title" href={'https://www.reddit.com' + props.article.permalink} target='_blank'>
                    {props.article.title}
                </a>
                <br/>
                <br/>
                {(props.article.url_overridden_by_dest &&
                props.article.url_overridden_by_dest.includes('i.redd.it')
                    ) ?
                <img className="actual_image" src={props.article.url_overridden_by_dest} alt='post thumbnail' onerror='this.style.display = "none"'/>: ''} 
           
            </div>
            <CommentsContainer subreddit = {props.subreddit} article = {props.article}/>
            
            <br></br>
        </article>
        </>
    )
    // return(
    //     <h1>Hello</h1>
    // )
}