import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Designs from './components/DesignPage/DesignPage';
import BobecoApp from './components/BobecoPage/BobecoPage.js';
import DesignCo from './components/DesignCoPage/DesignCoPage';
import About from './components/AboutPage/AboutPage';
import Resume from './components/ResumePage/ResumePage';
import pdfFile from './DraftResumePortfolio.pdf';
import SideNavbar from './components/SideNavbar/SideNavbar';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
        <Router>
        <SideNavbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bobeco-app" element={<BobecoApp />} />
              <Route path="/design-co" element={<DesignCo />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
          </Routes>
      </Router>
    </div>
);
}

export default App;
