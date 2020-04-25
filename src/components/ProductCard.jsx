import React from "react";
import Image from "./Image";
import {Container, Row, Col} from 'react-bootstrap';
import AddProductButton from "./AddProductButton";

function ProductCard(props) {
  return (
    <div className="card" 
    onClick={() => {
      props.onChecked(props.name);
    }}>
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
        <AddProductButton
            identifier={props.identifier}
            name={props.name}
          />
      </div>
      </Row>
      <Row>
        <Col>
          <p className="productCardName">{props.name}</p>
        </Col>
      </Row>      
      </Container>
    </div>
  );
}

export default ProductCard;