import React from "react";
import Image from "./Image";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Card from "./Card";

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
            <Note></Note>
            <ul>
            {items.map(createCard)}
                

                {items.map(item => (
                    <li key={item.idIngredient}>
                        {item.strIngredient}
                        <Image 
                            img={`https://www.themealdb.com/images/ingredients/${item.strIngredient}.png`}
                        />                              
                    </li>
                ))}
            </ul>
            <Footer></Footer>
        </div>
    );
                }
    
}

    

export default App;