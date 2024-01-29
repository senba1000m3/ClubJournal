import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Book from "./pages/Book";
import EachPages from "./pages/EachPages";
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
