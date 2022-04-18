import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <ul className="navBar">
        <li>
          <NavLink exact to="/" id="home"><img src={require("./dubvelopers-logo.png")} alt="Logo"/></NavLink>
        </li>
        <li>
          <NavLink exact to="/team" className="link" activeClassName>Our Team</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="link" activeClassName>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link" activeClassName>Contact Us</NavLink>
        </li>
      </ul>
        
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
