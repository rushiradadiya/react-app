import React, {useState, useEffect} from 'react';
import {connect,useSelector} from 'react-redux';
import {Grid, Menu, Segment, Container,Table,Divider} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./about.css"
import CardComponent from "../cardComponent/cardComponent"
import Header from "../header/header";

import {getArticleData} from "../../actions/home"

const About = (props) => {
const [activeItem,setActiveItem] = useState('aboutus')

    return (     
     <div className='aboutusContainer'>
        <Header {...props}/>
          <div className='aboutus'>
        
          <Container>

         <div>
              <Menu attached='top' tabular>
                <Menu.Item
                    name='About us'
                    active={activeItem === 'aboutus'}
                    onClick={()=>setActiveItem('aboutus')}
                />
                <Menu.Item
                    name='Custom Walls'
                    active={activeItem === 'custom'}
                    onClick={()=>setActiveItem('custom')}

                />
                </Menu>
        </div>
       {activeItem === 'aboutus' && 
        <div>
              <h1 style={{marginTop:'15px'}}>About Us</h1>
              <div className='detailView'>
                 <p>Established in the year 2021, we “Ajanta” are a leading manufacturer and trader of a superior quality range of Compound Wall, Scaffold Planks, Labour Quarter And House, etc. We also providing services of installation service of compound walls. We manufacture these products using superior quality construction materials like cement, sand and concrete with the help of modern machines. These cement products are highly appreciated by our coveted clients for their elegant design, smooth finish, strong construction, crack resistance, weather proof and durability. Further, these products are available in various colors, designs and sizes. We are also providing installation service for our products. We also provide Compound Wall Fencing Service.</p>
                    <br/>
                    <p>Our director, Mr. Narendra Patel is instrumental in our success in this domain. His in-depth and sharp knowledge have enabled us to garner a huge clientele.</p>
                    <Segment>
                    <h2>Factsheet</h2>  
                    <Divider/>   
                    <h3 style={{textAlign:'left'}}>Basic Information</h3>  
                    <Table>
                    <Table.Body>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Nature of Business</Table.HeaderCell>
                        <Table.Cell>Manufacturer</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Manufacturer </Table.HeaderCell>
                        <Table.Cell>Trader, Service Provider, Supplier</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Company CEO</Table.HeaderCell>
                        <Table.Cell>Narendra Patel</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell collapsing>Registered Address	</Table.HeaderCell>
                        <Table.Cell>Manufacturer</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Year of Establishment	</Table.HeaderCell>
                        <Table.Cell>2021</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Legal Status of Firm</Table.HeaderCell>
                        <Table.Cell>Partnership Firm</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Promoter</Table.HeaderCell>
                        <Table.Cell>MR. Narendra Patel</Table.Cell>
                    </Table.Row>
                
                    </Table.Body>
                </Table> 

                    <h3 style={{textAlign:'left'}}>Infrastructure</h3>  
                    <Table>
                    <Table.Body>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Location Type</Table.HeaderCell>
                        <Table.Cell>SEMI-URBAN</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Building Infrastructure</Table.HeaderCell>
                        <Table.Cell>Permanent</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Size of Premises</Table.HeaderCell>
                        <Table.Cell>2 acres</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.HeaderCell collapsing>Space Around</Table.HeaderCell>
                        <Table.Cell>Front porch</Table.Cell>
                    </Table.Row>                
                    </Table.Body>
                </Table>      


                <h3 style={{textAlign:'left'}}>Company USP</h3>  
                    <Table>
                    <Table.Body>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Primary Competitive Advantage</Table.HeaderCell>
                        <Table.Cell><div>Good Financial Position & TQM<br/>Large Production Capacity<br/> Provide Customized Solutions<br/>Large Product Line</div></Table.Cell>
                    </Table.Row>          
                    </Table.Body>
                </Table> 

                <h3 style={{textAlign:'left'}}>Packaging/Payment and Shipment Details</h3>  
                    <Table>
                    <Table.Body>
                    <Table.Row>
                        <Table.HeaderCell collapsing>Payment Mode</Table.HeaderCell>
                        <Table.Cell><div>DD<br/>Credit Card<br/>Cheque<br/>Cash</div></Table.Cell>
                    </Table.Row> 

                    <Table.Row>
                        <Table.HeaderCell collapsing>Shipment Mode</Table.HeaderCell>
                        <Table.Cell>By Road</Table.Cell>
                    </Table.Row>          
                    </Table.Body>
                </Table>      
               
                </Segment>
                <h3>Quality Assurance</h3>
                <p>In order to retain clients' allegiance and have strongest defense against competition, we pay stress towards products quality. Superior quality cement and other material is sourced by us from reliable vendors for developing offered Precast RCC Folding Compound Wall, Precast Concrete Products and Prefabricated Cement Products. Every production stage takes place under the vigilance of quality controllers in sync with international norms. These quality professionals also gauges manufactured products, before making final dispatch so as to ensure their flawlessness.</p>
                <br/>

                <h3>Our Infrastructure</h3>
                <p>We have developed a sophisticated infrastructural facility that is well-equipped with all the required latest machines and technologies. Our infrastructure is segregated into various departments like manufacturing, quality testing, research & development, etc. This efficient and organized segregation assists us in carrying out smooth business operations. These departments are handled by our experienced professionals who ensure disciplined business operations. Also, we regularly update our infrastructure to meet technological advancements of the industry.</p>
                <br/>

                <h3>Our Aim</h3>
                <ul>
                    <li>&ldquo;To achieve 100% Excellence through 100% Contribution by all the employees in the organization</li><li>To make every employee as a self-driven, cost conscious &amp; capable of doing the job excellently</li><li>To develop the reporting abilities of the employees through self-documentation, report analysis and effective methods of communication</li><li>Consistently sustain and achieve new highs in productions</li><li>Quality and price leadership in every market we serve</li><li>Establish and maintain the reputation of our company and its product brand.&rdquo;</li></ul>	
                <br/>

                <h3>Our Mission</h3>
                    <ul><li>We will provide products of superior quality at competitive price and ensure sustained profitability and growth</li><li>We will protect the interest of all concerned: Promoters, Shareholders, Customers, Distributors, Employees and Community</li><li>We will continue to be a moving force in our Nation&rsquo;s progress</li><li>We believe in fair trade practices, principles of integrity, standard and strive for total customer satisfaction, keeping the environment Eco-friendly.</li></ul>
                <br/>

                <h3>Our Team</h3>
                    <p>Our firm has the firm support of a skilled team of professionals who proficiently manage our entire business process in an efficient manner. They have been hired by our human resource department after stringent assessment of their knowledge and experience. Our team consists of manufacturing professionals, quality controllers and sales & marketing. The sales and marketing team of our organization ensure that each and every ordered consignment reaches client’s end within the promised time frame.</p>
                <br/>

                <h3>Our Clientele</h3>
                <ul><li>Transpek Industries Ltd., Vadodara</li><li>Solaris Biochemicals Ltd., Vadodara</li><li>Universal Medicap Ltd., Vadodara</li><li>Tower Overseas Ltd., Ahmedabad</li><li>Nirma Ltd., Ahmedabad</li><li>Reliance Ind. Ltd., Hajira</li><li>Jaiprakash Associates Ltd., Chapad</li><li>Asia Motor Workers Ltd., Bhauchau</li><li>Euro Ceramics Ltd., Bhachau</li><li>Welspun India Ltd., Anjar</li><li>Rubamin Ltd., Dabhasa, etc.</li></ul>	
                <br/>

                <h3>Why Us?</h3>
                    <p>With years of experience in this industry, we know what our customers are looking for. There are a lot of reasons that gives us a competitive edge over the other organization. Our offered products are highly admired by the customers for their excellent finishing standards. Apart from this, we are offering these products at budget-friendly prices within the assured period of time.</p>
                <br/>
                <p>The points for which make us stand ahead of other companies are as follow:</p>
                <ul>
                    <li>Cost effective</li>
                    <li>Customization</li>
                    <li>Timely delivery</li>
                    <li>Maximum customer satisfaction</li>
                    <li>State-of- the-art infrastructure</li>
                </ul>	
            </div>
        </div> 
       }
       {activeItem === 'custom' && 
        <div>
             <h1 style={{marginTop:'15px'}}>RCC Compound Walls V/s Brick Walls</h1>
              <div className='detailView'>
                  <p>During the recent developments, importance of brick walls are getting lesser compared to RCC compound walls. Saturation point has come where now days people prefer our product to traditional brick walls. Last but not the least, following are some of the observations our teams have gained from various markets.</p>

                  <Table celled selectable>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>SR_No</Table.HeaderCell>
                        <Table.HeaderCell>Properties</Table.HeaderCell>
                        <Table.HeaderCell>RCC Boundary Walls</Table.HeaderCell>
                        <Table.HeaderCell>Traditional Brick Walls</Table.HeaderCell>
                        <Table.HeaderCell>Remarks</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>Construction time (for 100 meters wall)</Table.Cell>
                        <Table.Cell>Constructed just within 2 days.</Table.Cell>
                        <Table.Cell>It takes at least 7 days to construct and another 7 days for water curing</Table.Cell>
                        <Table.Cell>RCC Compound walls save precious construct time</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>Strength</Table.Cell>
                        <Table.Cell>RCC Panels consist of high tensile wire at every 75 mm distance and can be cut only by mechanical means.</Table.Cell>
                        <Table.Cell>The weakest part of this wall is its 150 mm thick brick masonry which can be easily broken by ordinary hand tools.</Table.Cell>
                        <Table.Cell>The weakest part of this wall is its 150 mm thick brick masonry which can be easily broken by ordinary hand tools.</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>Long Lasting</Table.Cell>
                        <Table.Cell>High durable as RCC panels are made from superior quality of concrete and steel materials.</Table.Cell>
                        <Table.Cell>Weak in nature as it depends on the quality of thickness, quality of sands, span of curing, the art of workmanship etc.</Table.Cell>
                        <Table.Cell>Weak in nature as it depends on the quality of thickness, quality of sands, span of curing, the art of workmanship etc.</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                    <Table.Cell>4</Table.Cell>
                        <Table.Cell>Re-stability</Table.Cell>
                        <Table.Cell>Can be moved easily from one place to another without losing the strength and quality</Table.Cell>
                        <Table.Cell>Get broken easily during movement staring from destruction to reconstruction. Almost 50% get lost in terms of quantity and quality.</Table.Cell>
                        <Table.Cell>RCC walls get stabled quickly as if new walls are being made.</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
              </div>
        </div>
       }
        </Container>
          </div>
     </div>
    )
}


const mapStateToProps = state => {
    const {article_data} = state.home;
    return {
        article_data
    };
};
export default connect(
    mapStateToProps,
    {
        getArticleData
    },
)(About);

