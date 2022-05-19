import React, { useEffect, useState } from "react";
 import './Story.css';
 



const StoryDescription = (props) => {
    const socket = props.socket;
    const coffeeon = props.coffeeon;
    const [stor,setStor] = useState('');
    const sendStory = (event) =>{
        event.preventDefault();
        if(!coffeeon){ 
        if(stor){
            socket.emit("story",stor)
        }
      }
    }
      useEffect(()=>{
        
        socket.on("story",(data)=>{
            setStor(data);
        })
      },[socket])
  
      useEffect(()=>{
        if(stor.length){
          props.setIsDescription(false);
        }else{
          props.setIsDescription(true);

        }
      },[stor])


  return (
            <div className="story" >
             {/* <h1 className="story-dis" >Story Description</h1>*/}
              <form className="form-story">
              <textarea className="textArea"
              rows="5"
              placeholder="Brief Your Story"
              value={stor}
              onChange={({ target: { value } }) => { if(!coffeeon){setStor(value)}}}
              onKeyPress={(event) => event.key === 'Enter' ? (event)=> { if(!coffeeon){sendStory(event)}} : null}
              ></textarea>
              <button className="btn sendButtons" onClick={(e) =>{if(!coffeeon){ sendStory(e)}}} >Send</button>
              </form>
            </div>

  );
};

export default StoryDescription;
