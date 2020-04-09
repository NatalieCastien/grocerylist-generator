import React, {useState} from "react";
import Card from "./Card";
// import Groceryform from "./Groceryform";
import GroceryListItem from "./GroceryListItem";
import GroceryInputField from "./GroceryInputField";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Grocerypage(props) {
    
    

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

    const [name, setName] = useState("");
    const [grocerylistName, setGrocerylistName] = useState("Name grocerylist");
    const [list, setList] = useState([]);
    
    const [showHeader, setShowHeader] = useState("none");
    const [showHeaderForm, setShowHeaderForm] = useState("inline-block");
    const [showList, setShowList] = useState("none");

    function handleChange(event) {
        setName(event.target.value);
    }
    
    function addItem(productname) {
        console.log(productname);
        setList(prevItems => {
            return [productname, ...prevItems] ;     
            });                         
    }
    
    function handleSubmit(event) {
        setGrocerylistName(name);
        setShowHeader("inline");
        setShowHeaderForm("none");
        setShowList("inline");
        event.preventDefault();
    }
    
      function onAdd(inputText) {
        setList(prevItems => {
          return [inputText, ...prevItems] ;     
        });               
      }
    
      function deleteItem(id) {
        setList(prevItems => {
          return prevItems.filter(
            (item, index) => {
              return index !== id;
            }
          )
        })
      }


    return(
    <div>
        <Row>
            <Col className="col-md-3">
                <div className="grocerylist">
                <div className="container groceryNote">
                <div className="grocerylistheading" style={{display: showHeader}}>
                    <h1>{grocerylistName}</h1>
                </div>

                <form className="form" onSubmit={handleSubmit} style={{display: showHeaderForm}}>
                    <input 
                        type="text"
                        placeholder="the name of your grocerylist"
                        onChange={handleChange}
                        value={name}
                    />
                    <button type="submit">Save</button>
                </form>

                <div style={{display: showList}}>
                <GroceryInputField onAdd={onAdd} />     
                </div>

                <div>
                    <ul>
                    {list.map((listItem, index) => (
                        <GroceryListItem
                        id={index}
                        key={index}
                        item={listItem}
                        onChecked={deleteItem}
                        />
                    ))}
                    </ul>
                </div> 
                </div>                    
                </div>
            </Col>

            <Col className="col-md-9">
                <div className="productlist">
                {props.items.map(createCard)}                                
                </div>
            </Col>   
        </Row>
    </div>
    )
}

export default Grocerypage;