import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Book from "./pages/Book";
import EachPages from "./pages/EachPages";
import SiteRoutes from "./pages/SiteRoutes";

function App() {
  return (
      <Router basename="/ClubJournal">
        <SiteRoutes/>
      </Router>
  );
}

export default App;
