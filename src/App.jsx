import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Mainpage from "./component/mainpage/Mainpage.jsx";
import Secondpage from "./component/secondpage/Secondpage.jsx";
import './App.css'
function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secondpage">Second Page</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/secondpage" element={<Secondpage />} />
      </Routes>
    </Router>
  );
}

export default App;
