import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route, 
  HashRouter
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Resources from "./pages/Resources/Resources";
import IndProject from "./pages/IndProject/IndProject";

import { Nav, Navbar } from "react-bootstrap";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <Navbar className="navBar" collapseOnSelect expand="sm">
        <Navbar.Brand href="/"><img src={require("./dubvelopers-logo.png")} alt="Logo"/>DUBvelopers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink to="/team" className="link" activeClassName>Our Team</NavLink>
            <NavLink to="/projects" className="link" activeClassName>Projects</NavLink>
            <NavLink to="/resources" className="link" activeClassName>Resources</NavLink>
            <NavLink to="/contact" className="link" activeClassName>Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project/:projectId" element={<IndProject/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
