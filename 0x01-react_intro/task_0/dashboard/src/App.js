import logo from './holberton.jpg';
import './App.css';

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
        <p>Copyright 2020 - holberton School</p>
     </div>
    </div>
  );
}

export default App;
