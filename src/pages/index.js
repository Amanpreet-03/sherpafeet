import React, { Component } from 'react';
import { css } from 'react-emotion';
import Layout from '../components/Layout';
//import { slide as BurgerMenu } from 'react-burger-menu'

// const bg = css`
//     background-image:url('https://sherpafeet.com/img/chandrataal.png');
//     background-repeat: no-repeat;
//     background-size: cover;
// `
const img=css`
    width:100%;
`

export default () => {
    return (<div>
                <Layout>   
                    <img className={img} src="https://sherpafeet.com/img/chandrataal.png" alt="sherpafeet background image" />      
                </Layout>  
            </div> 
    )
}



/*
           <div className={bg}>
                <div> 
                <img src="https://sherpafeet.com/assets/31c8c0d6.png" alt="sherpafeet logo" />
                <span>Follow Us</span>
                    <h1> Treks, Hikes & Find Local Guides </h1>
                </div>
            </div>
            */