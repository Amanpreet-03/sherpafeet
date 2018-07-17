import React, { Component } from 'react';
import { css } from 'react-emotion';
import { Link } from 'gatsby';

const topnav = css`
    background: white;
    height: 3.5rem;
    overflow:visible;
    position:fixed;
    top:0;
    width:100%
`
const logo = css`
    margin-left:25px;
    height:40px;
`

const nav = css`
    float:right;
    margin-right:83px;
    list-style:none;
    font-size:18px;  
    font-weight: bold;
    text-transform: uppercase;
    font-family:Helvetica Neue,Helvetica,Arial,sans-serif;   
`
const navli = css`
    margin-left:135px;
    display:inline-block;
    color: rgba(59,89,152,.6);
    text-decoration:none;
    letter-spacing:3px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s; 
    &:hover {
        color: #23527c;
      }
`
const Nav = ()=>(
    <div className={topnav}>
        <Link to="#"><img className={logo} src="https://sherpafeet.com/assets/767ae8db.png" alt="sherpafeet brand logo" /></Link>
        <nav className={nav}>
            <ul>
                <Link to="#" className={navli}>Find & Review Guides</Link>
                <Link to="#" className={navli}>Treks</Link>
                <Link to="#" className={navli}>About</Link>
                <Link to="#" className={navli}>Log In</Link>
            </ul>
        </nav>
    </div>  
)

export default Nav;
