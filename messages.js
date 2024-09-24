import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

const socket = io('http://localhost:3000');

function ChatRoom () { 
    const [messages, setMessages] = useStat([]); 
    const [messageText, setMessageText] = useState('') ; 

    //now to send a message
    const sendMessage = () => { //sends message when called
        socket.emit('message', messageText); 
        setMessageText(''); 
    };

    //function to recieve messages
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages => [...messages, message]);
         });
    }, []) ; 

    //more code will go here 

    return (
        <div className="chat-room"> 
        //chat room components go here
        </div>
    );
}

export default ChatRoom; 