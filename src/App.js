import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import GoogleClubPage from './components/GoogleClubPage/GoogleClubPage.js';
import BobecoApp from './components/BobecoPage/BobecoPage.js';
import DesignCo from './components/DesignCoPage/DesignCoPage.js';
import SizzlePage from './components/SizzlePage/SizzlePage.js';
import About from './components/AboutPage/AboutPage.js';
import Resume from './components/ResumePage/ResumePage.js';
import SideNavbar from './components/SideNavbar/SideNavbar.js';

function App() {
  return (
    <div className='App'>
        <Router>
        <SideNavbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bobeco-app" element={<BobecoApp />} />
              <Route path="/design-co" element={<DesignCo />} />
              <Route path="/dsc-club" element={<GoogleClubPage />} />
              <Route path="/sizzle-app" element={<SizzlePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
          </Routes>
      </Router>
    </div>
);
}

export default App;

