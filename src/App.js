import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import DesignPage from './components/DesignPage/DesignPage';
import ResumePage from './components/ResumePage/ResumePage';
import pdfFile from './DraftResumePortfolio.pdf';
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
           
            <li className = "download-link-container">
             
                
                

                <a href={pdfFile} download className = "resume-link">
                  Resume
                </a>
            <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                >
              <path
                d='M15 11.25V13.5C15 14.3284 14.3284 15 13.5 15H4.5C3.67157 15 3 14.3284 3 13.5L3 11.25M6 8.25L9 11.25M9 11.25L12 8.25M9 11.25V2.25'
                stroke='#878787'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

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
