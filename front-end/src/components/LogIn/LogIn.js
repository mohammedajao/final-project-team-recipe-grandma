import * as React from 'react';
import { useState } from 'react';
import RGButton from '../RGButton';
import './LogIn.css';

function LogIn(): React.Node {
  const [usernameText, setUsernameText] = useState('');
  // For a more secure approach, you could hash here & on the backend
  const [passwordText, setPasswordText] = useState('');

  console.log(usernameText, passwordText);

  return (
    <div className="LogInFormContainer">
      <form className="LogInForm">
        <h2 className="username">Username</h2>
        <div className="usernameInput">
          <input
            type="text"
            placeholder="Enter username"
            onChange={(ev) => setUsernameText(ev.target.value)}
          />
        </div>
        <h2 className="password">Password</h2>
        <div className="passwordInput">
          <input
            type="password"
            placeholder="Enter password"
            onChange={(ev) => setPasswordText(ev.target.value)}
          />
        </div>
        <div className="button">
          <RGButton
            text="Submit"
            onAction={() => false}
            width="auto"
          />
        </div>
      </form>
    </div>
  );
}

export default LogIn;