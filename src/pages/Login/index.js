import React, { useState } from 'react';
import './index.css';

import { useHistory } from "react-router-dom";

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const history = useHistory();

	// function to update state of email with value
	// enter by user in form
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	  }
	// function to update state of password with
	// value enter by user in form
	const handlePasswordChange = (e) => {
	  setPassword(e.target.value);
	}
	// below function will be called when user
	// click on submit button .
	const handleSubmit = (e) => {

		console.log('Email :"' + email + '"');
    history.push("/dashboard");
	  // e.preventDefault();
	}

  const navigateTo = () => history.push('/dashboard');
  //eg.history.push('/login');


  return (
    <div className="Login">
     <header className="Login-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h3> Login Form </h3>
         
          <label>
            Email:
          </label><br />
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          
          <input type="submit" value="Submit" />
        </form>
        {/* <button onClick={navigateTo}>Submit</button> */}
      </header>
    </div>

  );
}



export default Login;