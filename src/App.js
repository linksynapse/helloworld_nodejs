import logo from './logo.svg';
import './App.css';

import base64 from 'base-64';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <Form>
          <Form.Group className='mb-3' controlId='encodeTextarea'>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='decodeTextarea'>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Form>
      </header>
    </div>
  );
}

export default App;
