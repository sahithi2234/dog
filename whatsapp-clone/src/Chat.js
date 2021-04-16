import MoreVertIcon from "@material-ui/icons/MoreVert"
import React,{useEffect,useState} from 'react'
import {Avatar, IconButton} from "@material-ui/core"
import AttachFile from "@material-ui/icons/AttachFile"
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import './Chat.css';

function Chat() {
    const[seed,setSeed] = useState('');
    const[input,setInput]=useState('');
        useEffect(() => {
            setSeed(Math.floor(Math.random()*5000));
           
        }, []);
       const sendMessage=(evt)=>{
            evt.preventDefault();
            
            setInput("")
        }
        
    return (
        <div className='chat-whole'>
            <div className='chat-header'>
                <IconButton>
                <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}/>
               </IconButton>
               <div className='chat-header-info'>
                   <h4>Chat Name</h4>
                   <p>Last seen at ....</p>
               </div>
               <div className='chat-header-right'> 
               <IconButton>
                   <SearchOutlined/>
               </IconButton>
               <IconButton>
                   <AttachFile/>
               </IconButton>
               <IconButton>
                   <MoreVertIcon/>
                </IconButton>
                </div>
            </div>
            <div className='chat-body'>
                  <p className='chat-msg chat-msg-reciever'><span className='chat-msg-user'>sahi</span>
                  hellow
                  <span className='chat-msg-time'>3:53pm</span></p>
            </div>
            <div className='chat-footer'>
                <InsertEmoticonIcon/>
                <form>
                    <input value={input} onChange={(event)=>(setInput(event.target.value))} placeholder='type your message here'/>
                    <button type='submit' onClick={sendMessage}>send a message</button>
                </form>
                <MicIcon/>


            </div>
        </div>
    )
}

export default Chat
