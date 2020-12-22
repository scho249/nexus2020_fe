import React from 'react'
import "./projects.css"
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './ProjectElements';

const Projects = () => {
    return (
        <div>
            <Nav>
				<div className="pane">
					<div className = "left-pane">
						<img className="logo" src={require('../../img/nexus_logo.png')} alt="logo"></img>
						<NavLink to="/" activeStyle>
							Home
							
							Notifications
							My Profile
							My Project
							Favorite
							Contact Us
							Sign Out
						</NavLink>
					</div>
				</div>
				<Bars />
                <NavMenu>
					<NavLink to="/" activeStyle>
                        Discover Projects
					</NavLink>
                    <NavLink to="/" activeStyle>
                        Recruitment
                    </NavLink>
                    
                </NavMenu>
                    <NavBtn>
						<NavBtnLink to="/" activeStyle>
                            Log In
                        </NavBtnLink>
                       <NavBtnLink to="/" activeStyle>
                            Sign Up
                        </NavBtnLink>
                    </NavBtn>
            </Nav>
        </div>
    )
}

export default Projects