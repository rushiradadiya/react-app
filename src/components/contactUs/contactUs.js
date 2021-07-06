import React, {useState, useEffect} from 'react';
import {connect,useSelector} from 'react-redux';
import {Grid, Menu, Segment, Container,Icon,Divider} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./contactUs.css"
import Header from "../header/header";


const Contact = (props) => {

    return (     
     <div className='contactusContainer'>
        <Header {...props}/>        
          <Container>
              
                <div className='detailView'>
                    <h1>CONTACT US</h1>
                    <Divider/>
                    <br/>
                    <div className="innerView">
                      <span><Icon name='user circle' size='big' /></span>
                        <div>
                          <span> <h3>CONTACT PERSON</h3></span>
                          <span> <h4>Narendra Patel | Director</h4></span>
                        </div>
                    </div>
                    <br/>
                    <div className="innerView">
                      <span><Icon name='map marker alternate' size='big' /></span>
                        <div>
                          <span> <h3>ADDRESS</h3></span>
                          
                          <span> <h4>Ukrid More, Jhiri, Nr. Kasturba Gandhi School, N.H.33, Ormanjhi, Ranchi, Jharkhand. India</h4></span>
                          <span><a href='https://maps.google.com/?q=23.251541028751912, 85.45361408769016' target="_blank"><Icon name='location arrow' />Get Direction</a></span>
                        </div>
                    </div>
                    <br/>
                    <div className="innerView">
                      <span><Icon name='phone volume' size='big' /></span>
                        <div>
                          <span> <h3>CONTACT NUMBER</h3></span>
                          <span><a href='tel:9638509600'> <h4>9638509600</h4></a></span>
                        </div>
                    </div>
               </div>
          </Container>
        
     </div>
    )
}


export default Contact;