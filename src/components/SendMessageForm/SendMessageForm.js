import React, { useState } from "react";
import './SendMessageForm.css';
import SendIcon from '@mui/icons-material/Send';


const SendMessageForm = () =>{
    const [messagesArray, setMessagesArray]=useState([]);
    const [messageData, setMessageData] = useState('');

    

    const handleChange = (event) =>{
        setMessageData(event.target.value);
    }
    const handleClick = () =>{
        messagesArray.push(messageData);
        console.log(messagesArray);
        
    }
return (
    <div  className="sendMessageList">
            <input className='inputField' id="message" name="message" type="text"  onChange={handleChange}></input>
            <button className='buttonField' onClick={handleClick} ><SendIcon/></button>
    </div>
)
}

export default SendMessageForm;
