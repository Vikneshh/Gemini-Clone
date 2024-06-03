import { useContext } from "react";
import { assets } from "../assets/assets"
import { Context } from "../context/Content"
const Main = () => {
    const {onSent,recentPrompt, showResult,loading,resultData,setInput,input}=useContext(Context);

    // Setting the cardtext
    const handleCardClick=(e)=>{
        const cardText = e.currentTarget.querySelector("p").textContent;
        setInput(cardText);
    }

  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="User_icon" />
        </div>

       

        <div className="mainContainer">

        {!showResult?
        <>
        <div className="greet">
                <p><span>Hello, Buddy.</span></p>
                <p>How can I help you today ?</p>
            </div>

            <div className="cards">
                <div className="card" onClick={handleCardClick}>
                    <p>What are some tips to improve public speaking skills for beginners?</p>
                    <img src={assets.bulb_icon} alt="Bulb_icon" />
                </div>
                <div className="card" onClick={handleCardClick}>
                    <p>Help me plan a game night with 5 friends. I have dice and cards</p>
                    <img src={assets.message_icon} alt="Message_icon" />
                </div>
                <div className="card" onClick={handleCardClick}>
                    <p> What are the most beautiful places to visit in India?</p>
                    <img src={assets.compass_icon} alt="Compass_icon" />
                </div>
                <div className="card" onClick={handleCardClick}>
                    <p>Suggest me some YouTube channels to improve my Coding Skills.</p>
                    <img src={assets.code_icon} alt="Code_icon" />
                </div>
            </div>
        </>: <div className="result">
            <div className="resultTitle">
                <img src={assets.user_icon} alt="User_icon" />
                <p>{recentPrompt}</p>
            </div>
            <div className="resultData">
                <img src={assets.gemini_icon} alt="" />

                {loading?<div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>:
               ( <p dangerouslySetInnerHTML={{__html:resultData}}></p>)
               }
               

                 {/*The resultData variable contains the raw HTML you want to render. By using dangerouslySetInnerHTML, React will inject this HTML directly into the DOM without escaping it.*/}

            </div>
        </div>
        }

            

            {/* Main  bottom querying place */}

            <div className="mainBottom">
                <div className="searchBox">
                    {/* Input state will be updated for every type so they are known as the CONTROLLED INPUTS*/}
                    <input type="text" placeholder="Enter a prompt here" onChange={(e)=>setInput(e.target.value)} value={input}/>
                    <div className="imageContainer">
                        <img src={assets.gallery_icon} alt="Gallery_icon" />
                        <img src={assets.mic_icon} alt="Mic_icon" />
                        {input?(<img src={assets.send_icon} alt="Send_icon" onClick={()=>onSent()} />):null}
                    </div>
                </div>
                <p className="bottomInfo">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
    </div>
  )
}

export default Main