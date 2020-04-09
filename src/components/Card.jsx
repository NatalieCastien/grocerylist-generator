import React from "react";
import Image from "./Image";
import {Container, Row, Col} from 'react-bootstrap';
import Button from "./Button";

function Card(props) {
  return (
    <div className="card" onClick={props.onChecked}>
      <Container>
      <Row>
      {/* <Col className="productcolumn">     
        <span className="name top">{props.name}</span>            
      </Col> */}
      <Col className="productcolumn">
        <Image cardimage={props.name} />
        </Col>
      </Row>
      <Row className="addButtonRow">
      <div className="addButtonDiv">
        <Button
            identifier={props.identifier}
            name={props.name}
          />
          </div>
      </Row>      
      </Container>
    </div>
  );
}

export default Card;