import React,{useState} from 'react';
import {Grid, Container, Image,Icon, Menu } from 'semantic-ui-react'
import "./header.css"
import logo from "../../images/logo.png"
import SubHeader from "../subHeader/subHeader";
import { NavLink, } from 'react-router-dom'



const HeaderComponent = (props) =>{
    const [activeItem,setActiveItem] = useState('home')
    return(
        <div>
            <div className="headerContainer">
           <Container className="leftPanel">
               <Image src={logo} width={70} height={60}></Image>
                 <div>
                     <span><h3>Articles & Friends</h3></span> 
                     <span><Icon name='map marker alternate'color='red'/>Ukrid, Ranchi, Jharkhand</span><br/>
                     <span><Icon name='call'  color='blue'/> 9638509600</span>
                 </div>
              
           </Container>
           <Container className="rightPanel">
           <Menu secondary >
                <Menu.Item
                    as={NavLink} to="/home"
                    name='Home'
                    active={activeItem === 'home'}
                    onClick={()=>{
                        setActiveItem('home') 
                    }}
                        
                />
                <Menu.Item
                    as={NavLink} to="/about"
                    name='About'
                    active={activeItem === 'about'}
                    onClick={()=>{
                       
                        setActiveItem('about')
                       }}
                />
                <Menu.Item
                    as={NavLink} to="/contactUs"
                    name='Contact Us'
                    active={activeItem === 'contactUs'}
                    onClick={()=>{
                    
                        setActiveItem('contactUs')
                    }}
                />
            
            </Menu>
           </Container>
       </div>
       <SubHeader {...props}/>
       </div>
    )
}
export default HeaderComponent
