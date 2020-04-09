import React from "react";
import Header from "./Header";
import Card from "./Card";
import Groceryform from "./Groceryform";
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
    const groceries = {...items};
    console.log(groceries);
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    function addItem(productname) {
        console.log(productname);
    }

    function createCard(item) {
        return (
          <Card
            key={item.idIngredient}
            identifier={item.idIngredient}
            name={item.strIngredient}
            img={item.img} 
            onChecked={addItem}       
          />
        );
      }

    return (
        <div className="App">
            <Header></Header>
            <Container>
            <Row>
            <Col className="col-md-3">
                <div className="grocerylist">
                    <Groceryform></Groceryform>                    
                </div>
            </Col>
            <Col className="col-md-9">
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