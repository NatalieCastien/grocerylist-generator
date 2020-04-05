import React from "react";
import Image from "./Image";
import {Container, Row, Col} from 'react-bootstrap';
import Button from "./Button";

function Card(props) {
  return (
    <div className="card">
      <Container>
      <Row>
      <Col className="productcolumn">     
        <span className="name top">{props.name}</span>            
      </Col>
      <Col className="productcolumn">
        <Image cardimage={props.name} />
        </Col>
        <Button 
            identifier={props.identifier}
            name={props.name}
          />
      </Row>      
      </Container>
    </div>
  );
}

export default Card;