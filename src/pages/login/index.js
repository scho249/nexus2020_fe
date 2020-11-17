import React from 'react'
import "./login.css"
import LoginForm from "../../components/LoginForm"

const Login = () => {
    return (
        <div className="pane">
            <div className="left-pane">
                <img className="nexus" src={require('../../img/nexus_logo.png')}></img>
                <p className="descr">Project Search Engine</p>
                <p className="intro"><span>Let your ideas shine.</span> <span>Together we can go further.</span></p>
            </div>
            <div className="right-pane">
                <div className="wrapper">
                    <LoginForm />
                </div>
                
            </div>
        </div>
        
    )
}

export default Login
