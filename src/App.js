import logo from './logo.svg';
import './App.css';

function EncodeBase64(str){
  let buff = new Buffer(str, 'utf-8').toString('base64');
  return buff;
}

function DecodeBase64(data){
  let buff = new Buffer(data, 'base64').toString('utf-8');
  return buff;
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
