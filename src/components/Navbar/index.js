import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <img className="logo" src={require('../../img/nexus_logo.png')} alt="logo"></img>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/projects" activeStyle>
                        Discover Projects
                    </NavLink>
                    <NavLink to="/recruit" activeStyle>
                        Meet your peers
                    </NavLink>
                    
                </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login" activeStyle>
                            Join the NEXUS Network
                        </NavBtnLink>
                    </NavBtn>
            </Nav>
        </div>
    )
}

export default Navbar
