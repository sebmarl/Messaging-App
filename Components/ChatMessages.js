import React from 'react'; 

function ChatMessage({message}) {
    return ( 
        <div classNAme="chat-message"> 
        <p>{message.user}: {message.text} </p> 
        </div>
    );
}

export default ChatMessage; 
//displays message sender name and message in User:Message form
//recieves message object as plot
//shows user and text properties
//Component will be used to display all messages 
