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
import {FacebookShareButton,LinkedinShareButton,TwitterShareButton,WhatsappShareButton} from 'react-share';
import {FacebookIcon,TwitterIcon,WhatsappIcon,LinkedinIcon} from 'react-share';
import Img from "gatsby-image";
  
  
  
  

const wrapper = css`
    display:flex;
    

`


const card = css`
    margin: 5px;
    border: 1px solid #ccc;
    //float: left;
    max-width: 250px;
    min-height:600px;
    //padding-bottom:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
;
      }
    margin-left:80px;
    margin-bottom:50px;


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
const shareButton = css`
    &:hover {
        opacity:0.75;
    }
`


export default(props)=>{
    const { data } = props;
    console.log(props);
    return( 
        <div>
        <Layout>
        <h6>Found {data.allMongodbTestGuides.edges.length} guides for treks and hikes in the Indian Himalayas.
      </h6>
    <div>
      {data.allMongodbTestGuides.edges.map(({node},index)=>(
        <div className={card} key={index}>
        <Link to="#" className={cardTitle}><h5 className={cardh}>{node.businessname}</h5></Link>




        <div>
        <FacebookShareButton url={"https://sherpafeet.com/"+"guide/"+node.uid} className={shareButton}>
            <FacebookIcon size={24} round={true}></FacebookIcon>
        </FacebookShareButton>
        </div>

        

    <div>
    {data.allImageSharp.edges.map(({node},index)=>(
        <Link to="#" className={cardimg} key={index}><img src={node.original.src}/></Link>
    
    )
    )}
        </div>
        
        <div className={cardBlock}>
            <span><strong>{node.firstname} {node.lastname}</strong></span>
            <div>Age {node.age}</div>
            <div>{node.address.city}, {node.address.state}</div>
            <div>Guiding work since <strong>{node.startwork}</strong></div>
            <Rating readonly={true} initialRating={node.rating} emptySymbol={<FaHeartO className={symbolEmpty}/>} fullSymbol={<FaHeart className={symbolFull}/>}/>
            <div><strong>{node.raters} Reviews</strong></div>              
            <div>
            <Popover  title="English" content="The guide can understand English.">
            <Icon icon="speaking"/>
            </Popover>
            <Popover  title="Basic Mountaineering" content="The guide has completed a certification in Basic Mountaineering.">
            <Icon icon="degree"/>
            </Popover>
            <Popover  title="Advanced Mountaineering" content="The guide has completed a certification in Advanced Mountaineering.">
            <Icon icon="certificate"/>
            </Popover>

            <Popover  title="Methods Of Instruction" content="The guide is a trained instructor.">
            <Icon icon="degreecap"/>
            </Popover>
            
        </div>
            
            
    </div>  
    
</div>

       ) )}
       </div>
        </Layout>
        </div>
    )
   }
    

   export const query = graphql`
  query($uid : String!) {
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
    allImageSharp(filter: {original: {src: {regex: $uid}}}){
        edges{
          node{
            id
            original {
              src
            }
          }
        }
        
      }
    
    

  }
`

// export const query = graphql`
//   query {
//     allMongodbTestGuides{
//       edges{
//         node{
//           uid
//           businessname
//           firstname
//           lastname
//           age
//           address {
//             street
//             city
//             state
//             country
//             pincode
//             }
//           startwork
//           rating
//           raters
//         }
//       }
//     }
//   }
// `



// allImageSharp(filter: {original: {src: {regex: "/RajeshThakur/"}}}){
//     edges{
//       node{
//         id
//         original {
//           src
//         }
//       }
//     }
    
//   }

// imageSharp(original: {src: {regex: "/RoshanRautela/"}}){
//     id
//     original {
//         width
//         height
//         src
//     }
//     }  
