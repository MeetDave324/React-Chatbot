// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// import Chatbot from 'react-chatbot-kit'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Chatbot />
//       </header>
//     </div>
//   );
// }

import React from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function App() {
  localStorage.setItem("flag",0);
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	 messageParser={MessageParser} />
        <a className="record-button" href="http://127.0.0.1:8000/admin/chatbot/record/">Click here to view past record</a>
      </header>
      <div>
        
      </div>
    </div>
  );
}
export default App;
