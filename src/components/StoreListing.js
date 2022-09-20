import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";

function DisplayStores(){
return(
<Container style={{ marginTop: "40px", textAlign: "center" }}>
<h2>Browse stores in Houston</h2>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs=".5" >
                <Image style={{width:"4vw", height:'6vh'}} src= "https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5">
                <Image style={{width:"4vw", height:'6vh'}} src="https://www.sprouts.com/wp-content/uploads/2020/03/sprouts-logo.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5" >
                <Image style={{width:"4vw", height:'6vh'}} src="https://cdn.cookielaw.org/logos/f95f67ef-e8ad-4274-9c69-04fd38042f86/30477475-b8a8-4e38-86c8-0e8e659c4bcb/ad174ce0-ba80-444e-8dea-b6337b570f2b/Kroger_Blue_on_Transparent_sm.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
    </Container>
   )
}

export default DisplayStores;