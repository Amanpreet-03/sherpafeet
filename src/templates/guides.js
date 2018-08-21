import React, { Component } from 'react';
import { graphql } from "gatsby";
import { css } from 'react-emotion';
import { Link } from 'gatsby';
import Rating from 'react-rating';
import Icon from '../components/Icons';
import Popover from '../components/Popover';
import Layout from '../components/Layout';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaHeart from 'react-icons/lib/fa/heart';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from 'react-share';
import Img from "gatsby-image";




const numberofGuides = css`
    padding: 128px 47px 48px;
    color:#626262;
    font-size:12px;
    font-family:PT Serif,serif;
    font-weight:500;
`

const cardContainer = css`
    //padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-content:space between;

`


const card = css`
    margin-bottom: 100px;
    border: 1px solid #ccc;
    //float: left;
    width: 250px;
    height:600px;
    //padding-bottom:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    //margin-right:50px;
    //margin-left:50px;
    //margin-bottom:50px;
      //flex:1;
      //flex-basis:30%
`
const cardTitle = css`
    text-decoration:none;
    text-align: center;
    //font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    
`
const cardh = css`
    //text-decoration;none;
    text-align: center;
    margin-bottom:0;
    color:rgba(59,89,152,.6);
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    padding:25px 10px;
    &:hover {
        color: #23527c;
      }
`

const cardimg = css`
    max-width: 100%;
    height: auto;


`
const cardBlock = css`
    text-align: center;
    margin:0 auto;
    font-size:14px;
    color:#757575;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    

`
const symbolFull = css`
    color: #8a0707;
    font-size:16px;
`
const symbolEmpty = css`
    color: #f4f4f4;
    font-size:18px;
`

const sharebuttons = css`
    display:flex;
    justify-content:center;
    //margin:auto;
    //text-align:center;
    //padding:5px;
    
`

const shareButton = css`
      //padding:10px;
      margin:8px;
    &:hover {
        opacity:0.75;
    }
`


export default (props) => {
    const { data } = props;
    // console.log(JSON.stringify(props.pathContext));

    let imagePath = Object.values(props.pathContext).map(x => x.node.original.src);

    // const date = data.allMongodbTestGuides.edges.node.startwork;
    // const year = date.substring(date.lastIndexOf('-')+1,date.length)
    

    // props.pathContext.forEach(x => console.log(x) )
    //console.log((props.pathContext[0]).node.original.src);
    // var a = props.pathContext;
    // // console.log(Object.keys(a).length);

    // var i;
    // var imagePath = [];
    // for (i = 0; i < Object.keys(a).length; i++) {
    //     var b = a[i];
    //     var c = b.node.original.src;
    //     // console.log(c);
    //     imagePath.push(c);
    // }

    // // console.log(typeof (c));
    // // console.log(imagePath);
    // imagePath.forEach(function (element) {
    //     // console.log(element);
    // });

    //{{node.startwork}.substring(date.lastIndexOf('-')+1,date.length}
    // const a=data.allMongodbTestGuides.edges.node.startwork
    // const y=a.substring(a.lastIndexOf('-')+1,a.length)
    // console.log(y);


    return (
        <div>
            <Layout>
                <h6 className={numberofGuides}>Found {data.allMongodbTestGuides.edges.length} guides for treks and hikes in the Indian Himalayas.
      </h6>
                <div className={cardContainer}>
                    {data.allMongodbTestGuides.edges.map(({ node }, index) => (
                        <div className={card} key={index}>
                            <Link to="#" className={cardTitle}><h5 className={cardh}>{node.businessname}</h5></Link>


                        <div className={sharebuttons}>
                            <div>
                                <FacebookShareButton url={"https://sherpafeet.com/" + "guide/" + node.uid} className={shareButton}>
                                    <FacebookIcon size={24} round={true}></FacebookIcon>
                                </FacebookShareButton>
                            </div>
                            <div>
                                <TwitterShareButton url={"https://sherpafeet.com/" + "guide/" + node.uid} className={shareButton}>
                                    <TwitterIcon size={24} round={true}></TwitterIcon>
                                </TwitterShareButton>
                            </div>
                            <div>
                                <WhatsappShareButton url={"https://sherpafeet.com/" + "guide/" + node.uid} className={shareButton}>
                                    <WhatsappIcon size={24} round={true}></WhatsappIcon>
                                </WhatsappShareButton>
                            </div>
                            <div>
                                <LinkedinShareButton url={"https://sherpafeet.com/" + "guide/" + node.uid} className={shareButton}>
                                    <LinkedinIcon size={24} round={true}></LinkedinIcon>
                                </LinkedinShareButton>
                            </div>

                        </div>
                 
                            <Link to="#" className={cardimg}><img src={imagePath.find(x=> x.includes(node.uid))}/></Link>
                        

                            
                            <div className={cardBlock}>
                                <span><strong>{node.firstname} {node.lastname}</strong></span>
                                <div>Age {node.age}</div>
                                <div>{node.address.city}, {node.address.state}</div>
                                <div>Guiding work since <strong>{node.startwork.substring(node.startwork.lastIndexOf('-')+1,node.startwork.length)}</strong></div>

                                <Rating readonly={true} initialRating={node.rating} emptySymbol={<FaHeartO className={symbolEmpty} />} fullSymbol={<FaHeart className={symbolFull} />} />
                                <div><strong>{node.raters} Reviews</strong></div>
                                <div>
                                    <Popover title="English" content="The guide can understand English.">
                                        <Icon icon="speaking" />
                                    </Popover>
                                    <Popover title="Basic Mountaineering" content="The guide has completed a certification in Basic Mountaineering.">
                                        <Icon icon="degree" />
                                    </Popover>
                                    <Popover title="Advanced Mountaineering" content="The guide has completed a certification in Advanced Mountaineering.">
                                        <Icon icon="certificate" />
                                    </Popover>

                                    <Popover title="Methods Of Instruction" content="The guide is a trained instructor.">
                                        <Icon icon="degreecap" />
                                    </Popover>

                                </div>


                            </div>

                        </div>

                    ))}
                </div>
            </Layout>
        </div>
    )
}


export const query = graphql`
  query{
    allMongodbTestGuides{
      edges{
        node{
          uid
          businessname
          firstname
          lastname
          age
          address {
            street
            city
            state
            country
            pincode
            }
          startwork
          rating
          raters
        }
      }
    }
    
    

  }
`
