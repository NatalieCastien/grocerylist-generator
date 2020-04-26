import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Grocerypage from "./Grocerypage";
import 'bootstrap/dist/css/bootstrap.min.css';
import recipes from "../recipes";
import { Container } from 'react-bootstrap';

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
        if (!isLoaded) {
            return <div>Loading...</div>;
        }    

        return (
            <div className="App">
                <Header></Header>               
                <Container className="mainContainer">            
                    <Grocerypage 
                        items={items}
                        recipes={recipes}                        
                    />
                </Container>
                <Footer></Footer>
            </div>
        );
    }
    
} 

export default App;