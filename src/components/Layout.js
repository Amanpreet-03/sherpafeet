import React,{Component} from 'react';
import Navigationbar from './Navigationbar/Navigationbar';
import Footer from './Footer/Footer';
import { css } from 'react-emotion';

const belownav = css`
    width: 100%;
    margin-top: 50px;
    z-index: 1;
    padding: 10px;
    background: #3b5998;
    color: #ffffff;
    text-align: center;
    font-size: 0.8em;
    box-sizing:border-box;
    box-shadow:0px 7px 8px -2px #000000 inset;
`
// const layout = css`
// overflow:hidden;
// padding:0;
// margin:0;
// `

const Layout = (props)=>(
    <div>
        <Navigationbar/>
        <div className={belownav}>
            sherpafeet.com is a free service to benefit trekkers and empower local guides. We do not take any money from guides or trekkers.
        </div>
        {props.children}
        <Footer/>
        
    </div>
)
export default Layout;



