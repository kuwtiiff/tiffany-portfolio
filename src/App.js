import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import DesignPage from './components/DesignPage/DesignPage';
import ResumePage from './components/ResumePage/ResumePage';
import pdfFile from './DraftResumePortfolio.pdf';
import SideNavbar from './components/SideNavbar/SideNavbar';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';

function App() {
  return (
      <div className='App'>
        <SideNavbar></SideNavbar>
      <HomePage></HomePage>
      </div>
  );
}

export default App;
