import React from 'react';
import {Grid, Container, Image,Icon } from 'semantic-ui-react'
import "./subHeader.css"


const HeaderComponent = (props) =>{
    return(
       <div className="subHeaderContainer">
           <Container className="rightPanel">
               <Grid>
                    <a className="buttonContainer" onClick={()=>{
                        props.history.push("/home")
                    }}>
                       Compound Wall
                    </a>
                   <a className="buttonContainer" onClick={()=>{
                       props.history.push("/friends")
                   }}>
                     Labour Quarter And House
                   </a>
                   <a className="buttonContainer" onClick={()=>{
                       props.history.push("/friends")
                   }}>
                     Office Building
                   </a>
                   <a className="buttonContainer" onClick={()=>{
                       props.history.push("/friends")
                   }}>
                     Footpath And Garden Curbing
                   </a>
                   <a className="buttonContainer" onClick={()=>{
                       props.history.push("/friends")
                   }}>
                     Ready Made Walls
                   </a>
                   <a className="buttonContainer" onClick={()=>{
                       props.history.push("/friends")
                   }}>
                    Precast Labour Quarter
                   </a>
               </Grid>
           </Container>
       </div>
    )
}
export default HeaderComponent
