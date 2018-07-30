import React, { Component } from 'react';
import { css } from 'react-emotion';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
//@import url('https://fonts.googleapis.com/css?family=PT Serif');
//import { slide as BurgerMenu } from 'react-burger-menu'





const bg = css`
    background-image:url('https://sherpafeet.com/img/chandrataal.png');
    background-repeat: no-repeat;
    background-size: cover;
`
const container=css`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`

const img=css`
    width: 196px;
    height:196px;
`
const a=css`
display:flex;
//flex-wrap:wrap;
    //text-align: center;
    font-size: 70px;
    //width: 1026px;
    //margin-left: 426px;
   // padding-top: 40px;
    padding-bottom:340px;
    justify-content:center;
    text-align:center;
    
`
const b=css`
    color:#3b5998`
const c=css`
    color:white;
    `
const contain = css`
    //margin: 0 auto;
    //margin-left:10px;
    padding: 70px;
    //max-width: var(--max-content-width);
    display:flex;
    //box-sizing:border-box;
    align-items:center;
    justify-content:center;
    

`
const pipe= css`
    background:#999;
    height:44px;
    width:1px;
    margin:0px 12px;
`

const x = css`
    display:flex;
    flex-direction:column;
    

`

const follow = css`
    color:#999;
    font-size:10px;
    text-transform: uppercase;
    letter-spacing:1px;
    font-weight:10px;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    `

const icons = css`
    color:#00aced;
    font-size:22px;

`
const guideText= css`
    padding:55px 0px 50px 30px;
    font-family: PT Serif,serif;
    font-weight:normal;
    //text-align:center;
    
`
const card = css`
    margin: 5px;
    border: 1px solid #ccc;
    //float: left;
    width: 180px;
    padding-bottom:10px;


`
const cardimg = css`
    width: 100%;
    height: auto;


`
const carddesc = css`
    padding: 15px;
    text-align: center;
`

export default () => {
    return (<div>
                <Layout>  
                    <div className={bg}> 
                    <div className={container}>
                    <div className={contain}>
                        <img className={img} src="https://sherpafeet.com/assets/31c8c0d6.png" alt="sherpafeet logo" />
                        <div className={pipe}></div>
                        <div>
                            <div className={x}>
                        <div className={follow}>
                        <span>Follow Us</span>
                        </div>
                        <div className={icons}>
                        <a><FaFacebook/></a>
                        <a><FaTwitter/></a>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div className={a}>
                        <p className={b}><span className={c}>Treks, Hikes &</span>Find Local Guides </p>
                    </div>
                    </div>

                </div>
                <h2 className={guideText}>Guide Spotlight (Based on most reviews)</h2>
                <div className={card}>
                //<Link to="#" className={carddesc}>Mountain Advice Adventure Travel</Link>
                <Link to="#" className={cardimg}><img src="https://s3-ap-southeast-1.amazonaws.com/carabiner/guides/RajeshThakur.jpg" alt="guide profile"/></Link>
                <div className={carddesc}>Add a description of the image here</div>
                </div>


                
                </Layout>  
            </div> 
    )
}






