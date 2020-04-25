import React, {useState, useEffect} from "react";
import shortid from 'shortid';
import ProductCard from "./ProductCard";
// import Groceryform from "./Groceryform";
import GroceryListItem from "./GroceryListItem";
import GroceryInputField from "./GroceryInputField";
// import recipes from "../recipes";
import RecipeCard from "./RecipeCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

function Grocerypage(props) {    

    const [name, setName] = useState("");
    const [grocerylistName, setGrocerylistName] = useState("Name grocerylist");
    var [countCal, setCountCal] = useState(1);
    const [groceryObject, setGroceryObject] = useState({name: "", count: 0})
    const [list, setList] = useState([{id: "", name: "", count: countCal}]);
    
    const [showHeader, setShowHeader] = useState("none");
    const [showHeaderForm, setShowHeaderForm] = useState("inline-block");
    const [showList, setShowList] = useState("none");
    const [showInspiration, setShowInspiration] = useState("none");
    const [showInspirationHeader, setShowInspirationHeader] = useState("none");
    const [showProducts, setShowProducts] = useState("none");
    const [showRecipes, setShowRecipes] = useState("none");

    function createProductCard(item) {
        return (
          <ProductCard
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
      setShowInspirationHeader("block");
      event.preventDefault();
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
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
    function findListItemByName(array, name) {
      return array.find((element) => {
        return element.name === name;
      })
    }
    
    // Add product to the list via the inspiration product cards
    function addItem(productname) {                
        const productOnList = productExists([productname]);
        if (productOnList === false) {
          var newId = shortid.generate();
          setList(prevItems => {
            setCountCal(1);
              return [{id: newId, name: productname, count: countCal}, ...prevItems] ;     
          });                      
        } else {
            const found = findListItemByName(list, productname);  
            const foundId = found.id;
            console.log("found: " + foundId);
            
            const index = getIndex(productname);
            const object = list[index];
            const objectCount = object.count;            
            const newCount = objectCount + 1;
            // Delete the item first
            deleteItem(foundId);
            // Add the item to the list again with the new count
            var newId = shortid.generate();
            setList(prevItems => {
              return [...prevItems.slice(0, index), {id: newId, name: productname, count: newCount}, ...prevItems.slice(index)] ;     
              });    
        }   
    }

    function addRecipeItems(ingredients) {
      var previousTime = 0;
      ingredients.map(function addproduct(ingredient) {
          // console.log(ingredient.count);
          
            const productname = ingredient.productname;
            const productcount = ingredient.count;
            const productOnList = productExists([productname]);
            console.log("name: " + productname + " productOnList?: " + productOnList);
            if (productOnList === false) {
            var newId = shortid.generate();
            setList(prevItems => {
              // console.log("productcount: " + productcount)
                return [{id: newId, name: productname, count: productcount}, ...prevItems] ;     
                });                      
            } else {
                const found = findListItemByName(list, productname);  
                const foundId = found.id;
                console.log("found: " + foundId);

                var index = getIndex(productname);
                const object = list[index];
                const objectCount = object.count;            
                const newCount = objectCount + productcount;
                // console.log("name: " + productname + " objectCount" + objectCount + " newCount" + newCount);
                // console.log(list);
                // Delete the item first
                deleteItem(foundId);
                // Add the item to the list again with the new count                
                  
                    var newId = shortid.generate();
                    setList(prevItems => {
                      return [...prevItems.slice(0, index), {id: newId, name: productname, count: newCount}, ...prevItems.slice(index)] ;     
                      });  
                  
            }   
          
      })     
  }

    
    // Add product to te list via the input field
      function onAdd(name, count) {
        // console.log(productname);        
        const productOnList = productExists([name]);
        // console.log(productOnList);
        if (productOnList === false) {
        var newId = shortid.generate();
        setList(prevItems => {
          setCountCal(1);
            return [{id: newId, name: name, count: countCal}, ...prevItems] ;     
            });                      
        } else {
            const found = findListItemByName(list, name);  
            const foundId = found.id;
            console.log("found: " + foundId);
            
            const index = getIndex(name);
            const object = list[index];
            const objectCount = object.count;            
            const newCount = objectCount + 1;
            
            deleteItem(foundId);

            setList(prevItems => {
              var newId = shortid.generate();
              return [...prevItems.slice(0, index), {id: newId, name: name, count: newCount}, ...prevItems.slice(index)] ;     
              });    
        }         
      }
    
      // Delete an item from the list
      function deleteItem(id) {
        console.log("ik ga deze verwijderen: " + id);
        setList(prevItems => {
          return prevItems.filter(
            (item) => {
              if (id == id) {console.log("met dit item: " + item.name)};
              return id !== item.id;
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

            const found = findListItemByName(list, name);  
            const foundId = found.id;
            console.log("found: " + foundId);
            // Delete the item first
            deleteItem(foundId);
            // Add the item to the list again with the new count
            var newId = shortid.generate();
            setList(prevItems => {
              return [...prevItems.slice(0, index), {id: newId, name: name, count: newCount}, ...prevItems.slice(index)] ;     
              });    
        
      }
      function subtractCount(name) {
        const index = getIndex(name);
        const object = list[index];
        const objectCount = object.count;
        const found = findListItemByName(list, name);  
        const foundId = found.id;
        console.log("found: " + foundId);            
        if (objectCount > 1) {
            const newCount = objectCount - 1;
            // Delete the item first
            deleteItem(foundId);
            // Add the item to the list again with the new count
            var newId = shortid.generate();
            setList(prevItems => {
              return [...prevItems.slice(0, index), {id: newId, name: name, count: newCount}, ...prevItems.slice(index)];     
              });    
          } else {
            deleteItem(foundId);
          }
    
  }

  function createTable(listItem, index) {
   const lastItem = list.length - 1;
   console.log(lastItem);
   console.log(index);
   if (index != lastItem) {
    return (
      <tr>
        <td className="printcol-1">{listItem.name}</td>
        <td className="printcol-2">{listItem.count}</td>
      </tr>
    );
  }}

  function printOrder() {

    const printableElements = document.getElementById('groceries').innerHTML;
    // const orderHtml = '<html><head><title></title></head><body>' + printableElements + '</body></html>';
    const oldPage = document.body.innerHTML;
    document.body.innerHTML = '<html><head><title></title></head><body>' + printableElements + '</body></html>';
    window.print();
    document.body.innerHTML = oldPage;
}

    return(
    <div>
        <Row>
            <Col className="col-md-4">
            <button className="printButton" onClick={printOrder}>Print grocerylist</button>
                <div id="groceryListDiv" className="grocerylist">                
                  <div className="container groceryNote">                    
                    <div className="grocerylistheading" style={{display: showHeader}}>
                        <h1>{grocerylistName}</h1>
                    </div>

                    <form className="form" onSubmit={handleSubmit} onKeyPress={handleKeyPress} style={{display: showHeaderForm}}>
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

                    <div id="groceryListItems">
                        <ul>
                        {list.map((listItem, index) => (
                            <GroceryListItem
                            id={listItem.id}
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
                    
                    <div id="groceries" style={{display:"none"}}>
                        <h1>{grocerylistName}</h1>
                        <ul>                        
                            <table>
                              <tbody>
                                {list.map(createTable)}
                              </tbody>
                            </table>                                                                              
                          </ul>
                    </div> 

                </div>                    
              </div>
            </Col>

            <Col className="col-md-8">
                <div className="inspirationHeaderDiv">
                <Row>
                  <Col>
                    <h1 className="inspirationHeader" style={{display: showInspirationHeader}}>Inspiration</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="inspirationList" style={{display: showInspiration}}>                  
                      <button id="productsbutton" onClick={showInsp} className="productsButton">Products</button>
                      <button id="recipesbutton" onClick={showInsp} className="recipesButton">Recipes</button>
                    </div>
                  </Col>
                </Row>
                </div>
                <div className="secondColumn">
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