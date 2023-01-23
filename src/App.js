import './App.css';
import React, { useState } from "react";
import MessagesList from './components/MessagesList/MessagesList';
import SendMessageForm from './components/SendMessageForm/SendMessageForm';
import Title from './components/Title/Title';

function App() {
  const [messagesArray, setMessagesArray]=useState([]);
  const [messageData, setMessageData] = useState('');

  return (
    <div className="main">
      <Title />
      <MessagesList messagesArray={messagesArray} setMessagesArray={setMessagesArray}/>
      <SendMessageForm setMessageData={setMessageData} messagesArray={messagesArray} messageData ={messageData}/>
    </div>
  );
}

export default App;
