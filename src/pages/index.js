import React, { Component } from 'react';
import { css } from 'react-emotion';
import Layout from '../components/Layout';
//@import url('https://fonts.googleapis.com/css?family=PT Serif');
//import { slide as BurgerMenu } from 'react-burger-menu'


const bg = css`
    background-image:url('https://sherpafeet.com/img/chandrataal.png');
    background-repeat: no-repeat;
    background-size: cover;
`
const img=css`
    width: 196px;
    margin-left: 780px;
    margin-top: 82px
`
const a=css`
    text-align: center;
    font-size: 70px;
    width: 1026px;
    margin-left: 426px;
    padding-top: 40px;
    padding-bottom:255px;
`
const b=css`
    color:#3b5998`
const c=css`
    color:white;
    `
const container = css`
    margin: 0 auto;
    padding: 20px 15px;
    max-width: var(--max-content-width);
    text-align: center; 
    background: #3b5998;
    color: #fff;
    width: 100%;
    box-sizing:border-box;

`
const contain = css`
    margin: 0 auto;
    padding: 20px 15px;
    max-width: var(--max-content-width);
    
    box-sizing:border-box;

`



export default () => {
    return (<div>
                <Layout>  
                    <div className={bg}> 

                    <div className={contain}>
                        <img className={img} src="https://sherpafeet.com/assets/31c8c0d6.png" alt="sherpafeet logo" />
                        <span>|</span>
                        <span>Follow Us</span>
                    </div>

                    <div className={a}>
                        <p className={b}><span className={c}>Treks, Hikes &</span>Find Local Guides </p>
                    </div>

                </div>
                </Layout>  
            </div> 
    )
}




            /*<div> 
                <img className={img} src="https://sherpafeet.com/assets/31c8c0d6.png" alt="sherpafeet logo" />
                <span>|</span>
                <span>Follow Us</span>*/
                