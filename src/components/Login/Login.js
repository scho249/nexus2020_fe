import React from 'react';

import './Login.css';

import LoginForm from './LoginForm';

import NexusLogo from './../../img/nexus_logo.png';

const Login = () => {
  return (
    <div className="pane">
      <div className="left-pane">
        <img className="nexus" src={NexusLogo}></img>
        <p className="descr">Project Search Engine</p>
        <p className="intro"><span>Let your ideas shine.</span> <span>Together we can go further.</span></p>
      </div>
      <div className="right-pane">
        <div className="wrapper">
          <LoginForm />
        </div>
      </div>
    </div>

  );
};

export default Login;
