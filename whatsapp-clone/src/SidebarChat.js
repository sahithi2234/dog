import { Avatar } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import './SidebarChat.css'

function SidebarChat(id,name) {
    const[seed,setSeed] = useState('');
        useEffect(() => {
            setSeed(Math.floor(Math.random()*5000));
           
        }, []);
        console.log(seed);
    return (
        
        <div className='sidebar-chat'>
            <Avatar src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}/>
            <div className='sidebar-chat-info'>
                <h4>{name}</h4>
                <p>last message</p>
            </div>
        </div>
    );
}

export default SidebarChat
