import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
  } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Redux from './pages/Redux';
import Recoil from './pages/Recoil';


function App() {
return (
	<>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
	  <Navbar />
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />
          <Route path="/recoil" component={Recoil} />
          <Route path="/redux" component={Redux} />
          <Route path="/contact" component={Contact} />
		      <Route path="/login" component={Login} />
		      <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Redirect to="/" />
        </Switch>
        <footer>footer added here</footer>
      </Router>
    </>
);
}

export default App;
