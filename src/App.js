import logo from './logo.svg';
import './App.css';

import utf8 from 'utf8';
import base64 from 'base-64';

function EncodeBase64(str){
  var endcodeData = base64.encode(str);
  console.log(endcodeData);
  return endcodeData;
}

function DecodeBase64(data){
  var decodeData = base64.decode(data);
  console.log(decodeData);
  return decodeData;
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
        <a>{EncodeBase64('helloworld')}</a>
      </header>
    </div>
  );
}

export default App;
