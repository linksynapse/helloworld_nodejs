import logo from './logo.svg';
import './App.css';

function base64DecodeUnicode(str) {
  // Convert Base64 encoded bytes to percent-encoding, and then get the original string.
  var percentEncodedStr = atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join('');


  return decodeURIComponent(percentEncodedStr);
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
        <a>{base64DecodeUnicode('SGVsbG8g8J+Yig==')}</a>
      </header>
    </div>
  );
}

export default App;
