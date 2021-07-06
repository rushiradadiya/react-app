import React, {useState, useEffect} from 'react';
import {connect,useSelector} from 'react-redux';
import {Grid, Menu, Segment, Container,Table,Divider} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./contactUs.css"
import Header from "../header/header";


const Contact = (props) => {

    return (     
     <div className='contactusContainer'>
        <Header {...props}/>        
          <Container>
              <div className='triangleView'></div>
                <div className='detailView'>
                    <h1>CONTACT US</h1>
                    <Divider/>
                    <div className="innerView">

                    </div>
            </div>
          </Container>
        
     </div>
    )
}


export default Contact;