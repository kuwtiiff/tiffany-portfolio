import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import DesignPage from './components/DesignPage/DesignPage';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active-link'>
                Home
              </NavLink>
            </li>
 <li>
              <NavLink to='/designs' activeClassName='active-link'>
                Designs
              </NavLink>
            </li>

            <li>
              <NavLink to='/about' activeClassName='active-link'>
                About
              </NavLink>
            </li>
           
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/designs' element={<DesignPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
