import React, {useState} from "react";
import GroceryListItem from "./GroceryListItem";
import GroceryInputField from "./GroceryInputField";

function Groceryform() {

    const [name, setName] = useState("");
    const [grocerylistName, setGrocerylistName] = useState("Name grocerylist");
    const [list, setList] = useState([]);
    
    const [showHeader, setShowHeader] = useState("none");
    const [showHeaderForm, setShowHeaderForm] = useState("inline-block");
    const [showList, setShowList] = useState("none");

    function handleChange(event) {
        setName(event.target.value);
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

    return (
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
    );
}

export default Groceryform;