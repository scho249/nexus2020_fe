import React from 'react';

import './Login.css';

import LoginForm from './LoginForm/LoginForm';

import NexusLogo from './../../img/nexus_logo.png';

const Login = () => {
  return (
    <div className="Login">
      <div className="Login__left">
        <img className="Login__left--logo" src={NexusLogo}></img>
        <p className="Login__left--descr">Project Search Engine</p>
        <p className="Login__left--intro">
          <span>Let your ideas shine.</span>
          <span>Together we can go further.</span>
        </p>
      </div>
      <div className="Login__right">
        <div className="Login__right--form">
          <LoginForm />
        </div>
      </div>
    </div>

  );
};

export default Login;
