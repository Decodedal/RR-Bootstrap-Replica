import React from "react";
import Card from 'react-bootstrap/Card';

function HeaderImg(){

    const style = {
        backgroundColor:"#deedd6",
       
    }

    return(
        <Card style={style}>
            <Card.Title>Order groceries for delivery or pickup today</Card.Title>
            <Card.Body>Whatever you want from local stores, brought right to your door.</Card.Body>
        </Card> 
    )
}

export default HeaderImg;