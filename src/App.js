import logo from './logo.svg';
import './App.css';

import utf8 from 'utf8';
import base64 from 'base-64';

function EncodeBase64(str){
  return base64.encode(utf8.encode(str));
}

function DecodeBase64(data){
  return base64.decode(utf8.decode(data));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - CI/CD Version 1.00.5
        </a>
        <a>{EncodeBase64('SGVsbG8g8J+Yig==')}</a>
        <a>{DecodeBase64('Hello 😊')}</a>
      </header>
    </div>
  );
}

export default App;
