import { useContext, useState } from "react";
import {assets} from "../assets/assets";
import { Context } from "../context/Content";

const Sidebar = () => {
    
    const[extended,setExtended]=useState(false);
    const{onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context);

    const loadPrompt=async (prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    const handleMenuClick=()=>{
        setExtended(!extended)
    }

  return (
    <div className="sidebar">
        <div className="top">
            <img src={assets.menu_icon} alt="Menu_icon" className="menu" onClick={handleMenuClick}/>
            <div className="new-chat" onClick={()=>newChat()}>
                <img src={assets.plus_icon} alt="Plus_icon" />
                {extended?<p>New Chat</p>:null}
            </div>
        {/*Conditional Rendering is happening here */}
            {extended?

            <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompt.map((item,index)=>{
                        return (
                            <div className="recent-entry" onClick={()=>loadPrompt(item)}>
                                <img src={assets.message_icon} alt="Message_icon" />
                                <p>{item.slice(0,18)}...</p>
                                {/* Only 18 alphabets will be displayed in the sidebar or if you don't splice it will show the whole prompt in there which takes up more width.*/}
                            </div>
                        )
                })}
                
            </div>:null
            }
        </div>
        <div className="bottom" >
            <div className="bottom-item recent-entry" >
                <img src={assets.question_icon} alt="Question_icon" />
                {extended?<p>Help</p>:null}

            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="History_icon" />
                {extended?<p>Activity</p>:null}

            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="Setting_icon" />
                {extended?<p>Settings</p>:null}

            </div>
        </div>
    </div>
  )
}

export default Sidebar