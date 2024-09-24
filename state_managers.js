import React, {useState, useEffect} from 'react' ; 

function ChatRoom() { 
    const [messages, setMessages] = useState ([]) ; 
    const [Users, setUsers] = useState ([]) ; 


    //more code will go here
    
    return (
        <div className ="chat-room">

            //chat room components go here

        </div>
        
    );
}

export default ChatRooms ; 

//initializing empty array for messages and users
// manages state of active users and messages, listens for new messages from server
//This is done by useState and useEffect
//states are updated when new data is recieved from server
