import logo from './logo.svg';
import './App.css';
import Parse from 'parse/dist/parse.min.js';

const appId = process.env.REACT_APP_PARSE_APP_ID;
const hostUrl =  process.env.REACT_APP_PARSE_HOST_URL;
const javascriptKey = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;

Parse.initialize(appId, javascriptKey);
Parse.serverURL = hostUrl;

function App() {

  const fetdata = async () =>{
    const query = new Parse.Query('test')
    const allData = await query.find();
    allData.forEach(item => {
      console.log('a', item)  
    });
  }

  fetdata();

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
          Learn React 1
        </a>
      </header>
    </div>
  );
}

export default App;
