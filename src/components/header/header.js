import React from 'react';
import {Grid, Container, Image,Icon } from 'semantic-ui-react'
import "./header.css"
import logo from "../../images/logo.png"
import SubHeader from "../subHeader/subHeader";


const HeaderComponent = (props) =>{
    return(
        <div>
            <div className="headerContainer">
           <Container className="leftPanel">
               <Image src={logo} width={70} height={60}></Image>
                 <div>
                     <span><h3>Articles & Friends</h3></span> 
                     <span><Icon name='map marker alternate'color='red'/>Ukrid, Ranchi, Jharkhand</span><br/>
                     <span><Icon name='call'    color='blue'/> 9638509600</span>
                 </div>
              
           </Container>
           <Container className="rightPanel">
               <Grid>
                    <a className="buttonContainer" onClick={()=>{
                        props.history.push("/home")
                    }}>
                       Home
                    </a>
                   <a className="buttonContainer" onClick={()=>{
                       props.history.push("/about")
                   }}>
                     About Us
                   </a>
                   <a className="buttonContainer" onClick={()=>{
                       props.history.push("/friends")
                   }}>
                     Contact Us
                   </a>
               </Grid>
           </Container>
       </div>
       <SubHeader {...props}/>
       </div>
    )
}
export default HeaderComponent
