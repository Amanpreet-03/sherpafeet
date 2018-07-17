import React, { Component } from 'react';
import { css } from 'react-emotion';
import Navigationbar from '../components/Navigationbar/Navigationbar';
import Footer from '../components/Footer/Footer';
import { Link } from 'gatsby';
//import { slide as BurgerMenu } from 'react-burger-menu'

// const dropdown = css`
//     display: inline-block;    
// `
// const dropdowncontent = css`
// display: none;
// position: absolute;
// background-color: #f9f9f9;
// min-width: 160px;
// box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
// padding: 12px 16px;
// z-index: 1;   
// `
const img = css`
width:100%;
`
export default () => {
    return (<div>
                <Navigationbar/>

                <img className={img} src="https://sherpafeet.com/img/chandrataal.png" alt="sherpafeet background image" />
                <Footer/>
                
            </div>
    )
}


