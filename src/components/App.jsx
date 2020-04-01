import React from "react";
import Image from "./Image";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

componentDidMount() {
    // Here the api call, fetch
    // res is result
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then(res => res.json())
    .then(json => {
        this.setState({
            items: json.meals.slice(0, 500),
            isLoaded: true,
        })
    });
}

render() {

    var { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    function createCard(item) {
        return (
          <Card
            key={item.idIngredient}
            name={item.strIngredient}
            img={item.img}        
          />
        );
      }

    return (
        <div className="App">
            <Header></Header>
            <Container>
            <Row>
            <Col className="col-9">
                <div className="productlist">
                {items.map(createCard)}                                
                </div>
            </Col>
            <Col className="col-3">
                <div className="productlist">
                {items.map(createCard)}                                
                </div>
            </Col>
            </Row>
            </Container>
        </div>
    );
                }
    
}

    

export default App;