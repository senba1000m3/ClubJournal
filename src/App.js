import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import SiteRoutes from "./pages/SiteRoutes";

function App() {
  return (
      <div className="sitesize">
          <Router basename="/ClubJournal">
            <SiteRoutes/>
          </Router>
      </div>
  );
}

export default App;
