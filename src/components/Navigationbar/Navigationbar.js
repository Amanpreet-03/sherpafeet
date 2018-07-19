import React,{Component} from 'react';
import { css } from 'react-emotion';
import { Link } from 'gatsby';

const topnav = css`
    background: white;
    height: 3.5rem;
    overflow:visible;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    box-shadow:0px 1px 8px -2px #000000;
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
const dropdownitemstyle=css`
      display:block;
      position:absolute;
      background-color:white;
      left:100px;
      min-width:268px;
      z-index:1;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      & a {
        display: block;
        text-transform: uppercase;
        text-decoration:none;
        letter-spacing: .1em;
        margin: 16px;
        color:rgba(59,89,152,.6);
      }
      & a:hover {
        color: #23527c;
      } 
 `
const dropdownMenustyle=css`
      position:relative;
      display:inline-block;
      margin:auto;
      & span{
          font-weight:bold;   
      }
      & div{
          display:none;    
      }
      & :hover{
          & div{
              ${dropdownitemstyle}
          }
      }
`
const Nav = ()=>(
    <div className={topnav}>
        <Link to="#"><img className={logo} src="https://sherpafeet.com/assets/767ae8db.png" alt="sherpafeet brand logo" /></Link>
        <nav className={nav}>
            <ul>
                <Link to="#" className={navli}>Find & Review Guides</Link>

                <div className={dropdownMenustyle}>
                    <span className={navli}>Treks</span>
                    <div className={dropdownitemstyle}>
                        <a href="#">Indian Himalayas</a>
                        <a href="#">Uttarakhand Treks</a>
                        <a href="#">Himachal Treks</a>
                        <a href="#">Ladakh Treks</a>
                        <a href="#">Lahaul Spiti Treks</a>
                    </div>
                </div>

                <div className={dropdownMenustyle}>
                    <span className={navli}>About</span>
                    <div className={dropdownitemstyle}>
                        <a href="#">About Us</a>
                        <a href="#">Mission</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

                <Link to="#" className={navli}>Log In</Link>
            </ul>
        </nav>
    </div>  
)

export default Nav;

