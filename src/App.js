import './App.css';
import * as React from "react";
import MessagesList from './components/MessagesList/MessagesList';
import SendMessageForm from './components/SendMessageForm/SendMessageForm';
import Title from './components/Title/Title';

function App() {
  return (
    <div className="main">
      <Title />
      <MessagesList/>
      <SendMessageForm />
    </div>
  );
}

export default App;
