import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <ul className="navbar">
        <li>
          <NavLink exact to="/" className="link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/team" className="link">Our Team</NavLink>
        </li>
      </ul>
        
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </Router>
  );
}

export default App;
