import React, { useEffect } from "react";
import './MessagesList.css';
import SendMessageForm from "../SendMessageForm/SendMessageForm";


const MessagesList = ({messagesArray, setMessagesArray}) =>{
    
return (
    <div className="messageList">
        <ul>
            {messagesArray.map( (currentV,index) =>
                <li className="messageStyle" key={index}>{currentV}</li>
            )}
        </ul>
    </div>
)
}
export default MessagesList;