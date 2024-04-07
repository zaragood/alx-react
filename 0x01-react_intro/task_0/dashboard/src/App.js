import logo from './holberton.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
     <div className="App-header">
        <div><img src={logo} alt='logo'></img></div>
        <div><h1>School dashboard</h1></div>
      </div> 
      <hr></hr>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      
      <hr></hr>
     <div className='App-footer'>
        <getFullYear></getFullYear>
        <getFooterCopy></getFooterCopy>
     </div>
    </div>
  );
}

export default App;
