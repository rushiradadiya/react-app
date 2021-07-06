import React, {useState} from 'react';
import {Image, Card, Button,Table} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./cardComponent.css"
import logo from "../../images/compound-wall.jpg"
const CardComponent = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [description, setDescription] = useState([]);
    const handleMoreOption = (id, length, isShow) => {
        setIsVisible(!isVisible)
    }
    return (
        <Card key>
            {props.data.image && <Image src={logo} wrapped ui={false} style={{ height: isVisible?'50%':'100%'}}/>}
            <Card.Content className={isVisible?'view-more':'view-less'}>
                <Card.Header><h1>{props.data.name}</h1></Card.Header>
                <span><h2>RS {props.data.price} / Square Feet</h2></span>
                <span className='qtyText'>Minimum Order Quantity: <b>{props.data.min_qun} Square Feet</b></span>
                <div>
                <Table>
                    <Table.Body>
                        {props.data.info.map(data=>{
                            return (<Table.Row>
                                <Table.Cell collapsing>{data.name} </Table.Cell>
                                <Table.Cell>{data.value}</Table.Cell>
                            </Table.Row>)
                        })}
                    
                    </Table.Body>
                    </Table>
                </div>
                {
                    <Card.Description className="description">
                       
                        {props.data.description}
                    </Card.Description>
                }
                <div >
                    <h3>Features:</h3>
                    <div><ul>
                    {props.data.features.map(data=>{
                       return <li className='listView'>{data}</li>
                    })}
                    </ul>
                    </div>
                </div>
                         
                <div>
                    <h3>Advantages:</h3>
                    <div><ul>
                    {props.data.advantages.map(data=>{
                       return <li className='listView'>{data}</li>
                    })}
                    </ul>
                    </div>
                </div>
                <div style={{position:'absolute',top:!isVisible?'97%':'92%',zIndex:1}}> <p style={{textShadow: '2px 2px 8px gray',textDecoration:'underline',textAlign:'right',color:'blue'}} onClick={() => {
                        handleMoreOption(props.data.id, props.data.description.length, isVisible)
                    }}>
                        {isVisible ? "View More details..." : "Show Less.."}
                    </p></div>
            </Card.Content>
        </Card>
    )
}
export default CardComponent
