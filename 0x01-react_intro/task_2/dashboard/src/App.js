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
        <form>
          <label for="email">Email: </label>
          <input type='tex' id='email' name='email'></input>
          <label for='password'>Password: </label>
          <input type='text' id='password' name='password'></input>
          <button>OK</button>

        </form>
      </div>
      
      <hr></hr>
     <div className='App-footer'>
        <getFullYear/>
        <getFooterCopy/>
     </div>
    </div>
  );
}

export default App;
