import React, {useState, useEffect} from "react";
import Card from "./Card";
// import Groceryform from "./Groceryform";
import GroceryListItem from "./GroceryListItem";
import GroceryInputField from "./GroceryInputField";
import recipes from "../recipes";
import RecipeCard from "./RecipeCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Grocerypage(props) {    

    const [name, setName] = useState("");
    const [grocerylistName, setGrocerylistName] = useState("Name grocerylist");
    var [countCal, setCountCal] = useState(1);
    const [groceryObject, setGroceryObject] = useState({name: "", count: 0})
    const [list, setList] = useState([{name: "", count: countCal}]);
    
    const [showHeader, setShowHeader] = useState("none");
    const [showHeaderForm, setShowHeaderForm] = useState("inline-block");
    const [showList, setShowList] = useState("none");
    const [showInspiration, setShowInspiration] = useState("none");
    const [showProducts, setShowProducts] = useState("none");
    const [showRecipes, setShowRecipes] = useState("none");

    function createProductCard(item) {
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
    
    function createRecipeCard(recipe) {
      return (
        <RecipeCard
          key={recipe.id}
          identifier={recipe.id}
          name={recipe.name}
          description={recipe.description}
          img={recipe.img} 
          ingredients={recipe.ingredients}
          onChecked={addRecipeItems}       
        />
      );
    }

    // Set grocerylist name when change
    function handleChange(event) {
        setName(event.target.value);
    }
    // After grocerylist name submitted, show/hide certain elements
    function handleSubmit(event) {
      setGrocerylistName(name);
      setShowHeader("inline");
      setShowHeaderForm("none");
      setShowList("inline");
      setShowInspiration("flex");
      event.preventDefault();
  }

    // Check whether chosen product is already on the list
    function productExists(productname) {
      return list.some(function(item) {
        return item.name == productname;
      }); 
    }

    // Get index of product in the array
    function getIndex(product) {
      return list.findIndex(obj => obj.name == product);
    }
    
    // Add product to the list via the inspiration product cards
    function addItem(productname) {
        const productOnList = productExists([productname]);
        if (productOnList === false) {
        setList(prevItems => {
          setCountCal(1);
            return [{name: productname, count: countCal}, ...prevItems] ;     
            });                      
        } else {
            const index = getIndex(productname);
            const object = list[index];
            const objectCount = object.count;            
            const newCount = objectCount + 1;
            // Delete the item first
            deleteItem(index);
            // Add the item to the list again with the new count
            setList(prevItems => {
              return [...prevItems.slice(0, index), {name: productname, count: newCount}, ...prevItems.slice(index)] ;     
              });    
        }   
    }

    function addRecipeItems(ingredients) {
      ingredients.map(
        function addproduct(ingredient) {
          console.log(ingredient.count);
          const productname = ingredient.productname;
          const productcount = ingredient.count;
          const productOnList = productExists([productname]);
          console.log("productOnList?: " + productOnList);
          if (productOnList == false) {
          setList(prevItems => {
            console.log("productcount: " + productcount)
              return [{name: productname, count: productcount}, ...prevItems] ;     
              });                      
          } else {
              const index = getIndex(productname);
              const object = list[index];
              const objectCount = object.count;            
              const newCount = objectCount + productcount;
              console.log("name: " + productname + " objectCount" + objectCount + " newCount" + newCount);
              console.log(list);
              // Delete the item first
              deleteItem(index);
              // Add the item to the list again with the new count                
                setTimeout(() => {
                  setList(prevItems => {
                    return [{name: productname, count: newCount}, ...prevItems] ;     
                    });  
                }, 1);
          }   
      })
  }

    
    // Add product to te list via the input field
      function onAdd(name, count) {
        // console.log(productname);        
        const productOnList = productExists([name]);
        // console.log(productOnList);
        if (productOnList === false) {
        setList(prevItems => {
          setCountCal(1);
            return [{name: name, count: countCal}, ...prevItems] ;     
            });                      
        } else {
            const index = getIndex(name);
            const object = list[index];
            const objectCount = object.count;            
            const newCount = objectCount + 1;
            
            deleteItem(index);

            setList(prevItems => {
              return [...prevItems.slice(0, index), {name: name, count: newCount}, ...prevItems.slice(index)] ;     
              });    
        }         
      }
    
      // Delete an item from the list
      function deleteItem(id) {
        setList(prevItems => {
          return prevItems.filter(
            (item, index) => {
              return index !== id;
            }
          )
        })
      }

      // Toggle between products and recipes
      function showInsp(event) {
        if (event.target.id == "productsbutton") {
          setShowProducts("flex");
          setShowRecipes("none");
        } else if (event.target.id == "recipesbutton") {
          setShowProducts("none");
          setShowRecipes("flex");
        }
      }

      function addCount(name) {
            const index = getIndex(name);
            const object = list[index];
            const objectCount = object.count;            
            const newCount = objectCount + 1;
            // Delete the item first
            deleteItem(index);
            // Add the item to the list again with the new count
            setList(prevItems => {
              return [...prevItems.slice(0, index), {name: name, count: newCount}, ...prevItems.slice(index)] ;     
              });    
        
      }
      function subtractCount(name) {
        const index = getIndex(name);
        const object = list[index];
        const objectCount = object.count;            
        if (objectCount > 1) {
            const newCount = objectCount - 1;
            // Delete the item first
            deleteItem(index);
            // Add the item to the list again with the new count
            setList(prevItems => {
              return [...prevItems.slice(0, index), {name: name, count: newCount}, ...prevItems.slice(index)];     
              });    
            } else {
              deleteItem(index);
            }
    
  }

    return(
    <div>
        <Row>
            <Col className="col-md-4">
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
                    <button className="squareButton" type="submit">Save</button>
                </form>

                <div style={{display: showList}}>
                <GroceryInputField onAdd={onAdd} />     
                </div>

                <div>
                    <ul>
                    {list.map((listItem, index) => (
                        <GroceryListItem
                        id={index}
                        key={"listitem" + index}
                        item={listItem.name}
                        onChecked={deleteItem}
                        count={listItem.count}
                        onAdd={addCount}
                        onSubtract={subtractCount}
                        />
                    ))}
                    </ul>
                </div> 
                </div>                    
                </div>
            </Col>

            <Col className="col-md-8">
                <div className="secondColumn">
                <div>
                  <button id="productsbutton" onClick={showInsp} className="inspirationButton">Products</button>
                  <button id="recipesbutton" onClick={showInsp} className="inspirationButton">Recipes</button>
                </div>
                
                <div className="recipelist" style={{display: showRecipes}}>
                  {props.recipes.map(createRecipeCard)}
                </div>

                <div className="productlist" style={{display: showProducts}}>
                {props.items.map(createProductCard)}                                
                </div>
                </div>
            </Col>   
        </Row>
    </div>
    )
}

export default Grocerypage;