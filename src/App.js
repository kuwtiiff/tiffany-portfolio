import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <HomePage></HomePage>
    </div>

  );
}

export default App;
