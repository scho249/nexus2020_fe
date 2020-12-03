import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #fff;
    height: 80px; 
    display: flex; 
    justify-content: space-between;
    padding-top: 20px;
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #F05A28; 
    display: flex;
    align-items: center; 
    text-decoration: none;
    font-weight: bold;
    padding: 0 1.2rem;
    height: 100%; 
    cursor: pointer; 
    &.active {
        color: #15cdfc; 
    }
`;

export const Bars = styled(FaBars)`
    display: none; 
    color: #888;
    @media screen and (max-width: 768px) {
        display: block; 
        position: absolute;
        top: 0; 
        right: 0;
        margin-top: 1rem;
        margin-right: 20px; 
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex; 
    align-items: center; 
    margin-right: -550px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex; 
    align-items: center; 
    margin-right: 54px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 10px; 
    background: #F05A28; 
    padding: 10px 22px; 
    color: #fff;
    font-weight: bold;
    border: none; 
    outline: none; 
    cursor: pointer; 
    transition: all 0.2s ease-in-out; 
    text-decoration: none; 
    &:hover {
        transition: all 0.2s ease-in-out; 
        background: #f37a52; 
        color #fff;
    }
`;