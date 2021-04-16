import React, { useState,useEffect } from 'react'
import {Avatar, IconButton} from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import "./Sidebar.css"
import "./SidebarChat.css"
import db from './firebase';

import SidebarChat from './SidebarChat'
function Sidebar() {
    const [rooms,setRooms] = useState([]);
   useEffect(() => {
         db.collection('rooms').onSnapshot((snapshot)=>
            setRooms(snapshot.docs.map((doc)=>({
                id: doc.id,
                data:doc.data()
            }))
        )
    );
       
    }, []);
     
    return (
        <div className="sidebar">
            <div className='sidebar-header'>
                <IconButton>
                   <Avatar/>
                </IconButton>
                <div className='sidebar-header-right'>
                <IconButton>
                   <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                   <ChatIcon/>
                </IconButton>
                <IconButton>
                   <MoreVertIcon/>
                </IconButton>
                </div>

            </div>
            <div className='sidebar-search'>
                 <div className='sidebar-search-container'>
                    <SearchOutlined/>
                    <input placeholder="Search or start a new Chat"/>
                 </div>


            </div>
            <div className='sidebar-chats'>
                <SidebarChat/>
                {rooms.map((room)=>(<SidebarChat id={room.id} name={room.data.name}/>))}

            </div>

        </div>
    )
}

export default Sidebar
